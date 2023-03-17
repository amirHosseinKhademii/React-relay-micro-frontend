import { graphql } from "react-relay";

export const CommentsQueryFragment = graphql`
  fragment CommentsQueryFragment on Query
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
        }
      }
    }
  }
`;

export const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    id
    title
    description
    likes
    created_at
    updated_at
  }
`;
