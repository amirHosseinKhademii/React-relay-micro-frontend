import { graphql } from "react-relay";

export const TodosSubscription = graphql`
  subscription TodosSubscription {
    todoUpdated {
      __typename
      id
      title
      description
      isCompleted
    }
  }
`;
