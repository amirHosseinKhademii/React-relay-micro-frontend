import { graphql } from "react-relay";

export const TodoUpdateMutation = graphql`
  mutation TodoUpdateMutation($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      clientMutationId
      todo {
        ...TodosBaseFragment
      }
    }
  }
`;
export const TodoAddMutation = graphql`
  mutation TodoAddMutation($input: AddTodoInput!, $connections: [ID!]!) {
    addTodo(input: $input) {
      clientMutationId
      addTodoEdge {
        cursor
        node @appendNode(connections: $connections, edgeTypeName: "TodoEdge") {
          ...TodosBaseFragment
        }
      }
    }
  }
`;

export const TodoDeleteMutation = graphql`
  mutation TodoDeleteMutation($input: DeleteTodoInput!, $connections: [ID!]!) {
    deleteTodo(input: $input) {
      clientMutationId
      id @deleteEdge(connections: $connections)
    }
  }
`;
