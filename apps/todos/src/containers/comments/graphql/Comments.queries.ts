import { graphql } from "react-relay";

export const CommentsQuery = graphql`
  query CommentsQuery(
    $before: String
    $after: String
    $first: Float
    $last: Float
    $cardId: ID!
  ) {
    ...CommentsQueryFragment
  }
`;
