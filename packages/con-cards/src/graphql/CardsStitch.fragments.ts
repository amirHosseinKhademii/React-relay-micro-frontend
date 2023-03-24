import { graphql } from "react-relay";

export const CardsStitchFragment = graphql`
  fragment CardsStitchFragment on Todo
  @refetchable(queryName: "CardsStitchCardsPaginationFrgament") {
    cards(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__cards") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CardsStitchBaseFragment
        }
      }
    }
  }
`;

export const CardsStitchBaseFragment = graphql`
  fragment CardsStitchBaseFragment on Card {
    title
    description
    id
    isCompleted
    ...CommentsStitchFragment
  }
`;
