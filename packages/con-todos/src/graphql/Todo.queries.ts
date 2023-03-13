import { graphql } from "react-relay";

export const TodoQuery = graphql`
  query TodoQuery($id: ID!) {
    node(id: $id) {
      ... on Todo {
        id
        title
        description
        isCompleted
        ...CardsFragment
      }
    }
  }
`;
