import { graphql } from "react-relay";

export const UsersBaseFragment = graphql`
  fragment UsersBaseFragment on User {
    id
    userName
    fullName
    followers
    followings
  }
`;

export const UsersByIdsFragment = graphql`
  fragment UsersByIdsFragment on Query
  @refetchable(queryName: "UsersByIdsPaginationFrgament") {
    usersByIds(
      before: $before
      after: $after
      first: $first
      last: $last
      ids: $ids
    ) @connection(key: "List__usersByIds") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          userName
          fullName
        }
      }
    }
  }
`;

export const UsersFragment = graphql`
  fragment UsersFragment on Query
  @refetchable(queryName: "UsersPaginationFrgament") {
    users(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__users") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          userName
          fullName
          followers
          followings
        }
      }
    }
  }
`;
