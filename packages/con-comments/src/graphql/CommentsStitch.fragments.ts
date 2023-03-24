import { graphql } from "react-relay";

export const CommentsStitchFragment = graphql`
  fragment CommentsStitchFragment on Card
  @refetchable(queryName: "CommentsStitchPaginationFrgament") {
    comments(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__comments") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CommentsStitchBaseFragment
        }
      }
    }
  }
`;

export const CommentsStitchBaseFragment = graphql`
  fragment CommentsStitchBaseFragment on Comment {
    id
    title
    description
    created_at
    updated_at
    likes
  }
`;
