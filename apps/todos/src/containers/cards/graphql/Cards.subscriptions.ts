import { graphql } from "react-relay";

export const CardsSubscription = graphql`
  subscription CardsSubscription {
    cardAdded {
      __typename
      id
      title
      description
      isCompleted
    }
  }
`;

export const CardsUpdatedSubscription = graphql`
  subscription CardsUpdatedSubscription {
    cardUpdated {
      __typename
      id
      title
      description
      isCompleted
    }
  }
`;
