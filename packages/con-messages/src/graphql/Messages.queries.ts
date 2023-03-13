import { graphql } from "react-relay";

export const MessagesLazyQuery = graphql`
  query MessagesLazyQuery(
    $before: String
    $after: String
    $first: Float
    $last: Float
    $query: MessagesQuery!
  ) {
    ...MessagesQueryFragment
  }
`;
