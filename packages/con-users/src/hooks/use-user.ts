import { useId, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { UserFollowMutation } from "../graphql/User.mutations";
import { UserFollowMutation as TUserFollowMutation } from "../graphql/__generated__/UserFollowMutation.graphql";
import { useRecoilValue } from "recoil";
import { authAtom } from "pcg-commons";
import { FragmentRefs } from "relay-runtime";
import { UserFragment } from "../graphql/User.fragments";
import { UserFragment$key } from "../graphql/__generated__/UserFragment.graphql";

export type TUser = {
  user: {
    readonly cursor: string | null;
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"UserFragment">;
    } | null;
  };
};

export const useUser = ({ user }: TUser) => {
  const userFragment = useFragment<UserFragment$key>(UserFragment, user.node);

  const [followUser] = useMutation<TUserFollowMutation>(UserFollowMutation);

  const clientMutationId = useId();

  const { user: userId } = useRecoilValue(authAtom);

  const [isMessagesOpen, setisMessagesOpen] = useState(false);

  const onMessagesToggle = () => setisMessagesOpen((prev) => !prev);

  return {
    userFragment,
    userId,
    isMessagesOpen,
    onMessagesToggle,
    onFollow: () => {
      followUser({
        variables: {
          input: {
            id: userFragment?.id!,
            clientMutationId,
          },
        },
        optimisticResponse: {
          followOrUnfollow: {
            user: {
              followers: userFragment?.followers!,
              followings: userFragment?.followings!,
              fullName: userFragment?.fullName,
              id: userFragment?.id!,
              userName: userFragment?.userName,
            },
            clientMutationId,
          },
        },
      });
    },
  };
};
