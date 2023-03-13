import { graphql } from "react-relay";

export const MessageAddMutation = graphql`
  mutation MessageAddMutation($input: AddMessageInput!, $connections: [ID!]!) {
    addMessage(input: $input) {
      clientMutationId
      addMessageEdge {
        cursor
        node
          @appendNode(connections: $connections, edgeTypeName: "MessageEdge") {
          ...MessageBaseFragment
        }
      }
    }
  }
`;
