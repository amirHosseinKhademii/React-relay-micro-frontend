import { graphql } from "relay-runtime";

export const UserFollowMutation = graphql`
  mutation UserFollowMutation($input: FollowOrUnfollowInput!) {
    followOrUnfollow(input: $input) {
      clientMutationId
      user {
        ...UsersBaseFragment
      }
    }
  }
`;
