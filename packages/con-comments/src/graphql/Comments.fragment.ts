import { graphql } from "react-relay";

export const CommentsFragment = graphql`
  fragment CommentsFragment on Query
  @argumentDefinitions(isDate: { type: "Boolean!" })
  @refetchable(queryName: "CommentsPaginationFrgament") {
    comments(
      before: $before
      after: $after
      first: $first
      last: $last
      cardId: $cardId
    ) @connection(key: "List__comments") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CommentFragment
          ...CommentDateFragment @include(if: $isDate)
        }
      }
    }
  }
`;
