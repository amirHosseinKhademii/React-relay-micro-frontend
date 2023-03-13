import { graphql } from "react-relay";

export const CommentBaseFragment = graphql`
  fragment CommentBaseFragment on Comment {
    id
    title
    description
    created_at
    updated_at
    likes
  }
`;

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
        node {
          id
          title
          description
          created_at
          updated_at
          likes
        }
      }
    }
  }
`;
