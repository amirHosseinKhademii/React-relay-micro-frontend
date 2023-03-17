import { graphql } from "react-relay";

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
        cursor
        node {
          ...UserByIdFragment
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
        cursor
        node {
          ...UserFragment
        }
      }
    }
  }
`;
