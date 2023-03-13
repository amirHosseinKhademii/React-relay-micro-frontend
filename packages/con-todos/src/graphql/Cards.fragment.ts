import { graphql } from "react-relay";

export const CardsFragment = graphql`
  fragment CardsFragment on Todo
  @refetchable(queryName: "TodoCardsPaginationFrgament")
  @argumentDefinitions(
    before: { type: "String" }
    after: { type: "String" }
    first: { type: "Float", defaultValue: 2 }
    last: { type: "Float" }
  ) {
    cards(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__cards") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          title
          description
          id
          isCompleted
        }
      }
    }
  }
`;

export const CardsBaseFragment = graphql`
  fragment CardsBaseFragment on Card {
    title
    description
    id
    isCompleted
  }
`;
