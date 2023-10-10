import { graphql } from "react-relay";

export const TodosUpdatedSubscription = graphql`
  subscription TodosUpdatedSubscription {
    todoUpdated {
      __typename
      id
      title
      description
      isCompleted
    }
  }
`;

export const TodosAddedSubscription = graphql`
  subscription TodosAddedSubscription($connections: [ID!]!) {
    todoAdded {
      __typename
      node @appendNode(connections: $connections, edgeTypeName: "TodoEdge") {
        ...TodosBaseFragment
      }
    }
  }
`;
