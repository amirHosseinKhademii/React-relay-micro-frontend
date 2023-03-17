import { useFragment } from "react-relay";
import { FragmentRefs } from "relay-runtime";
import { UserByIdFragment } from "../graphql/User.fragments";
import { UserByIdFragment$key } from "../graphql/__generated__/UserByIdFragment.graphql";

export type TUserById = {
  user: {
    readonly cursor: string | null;
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"UserByIdFragment">;
    } | null;
  };
};

export const useUserById = ({ user }: TUserById) => {
  const userByIdFragment = useFragment<UserByIdFragment$key>(
    UserByIdFragment,
    user.node
  );

  return {
    userByIdFragment,
  };
};
