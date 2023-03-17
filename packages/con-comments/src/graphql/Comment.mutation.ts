import { graphql } from "react-relay";

export const CommentAddMutation = graphql`
  mutation CommentAddMutation($input: AddCommentInput!, $connections: [ID!]!) {
    addComment(input: $input) {
      clientMutationId
      addCommentEdge {
        cursor
        node
          @appendNode(connections: $connections, edgeTypeName: "CommentEdge") {
          ...CommentFragment
          ...CommentDateFragment
        }
      }
    }
  }
`;

export const CommentDeleteMutation = graphql`
  mutation CommentDeleteMutation(
    $input: DeleteCommentInput!
    $connections: [ID!]!
  ) {
    deleteComment(input: $input) {
      clientMutationId
      id @deleteEdge(connections: $connections)
    }
  }
`;

export const CommentLikeMutation = graphql`
  mutation CommentLikeMutation($input: LikeCommentInput!) {
    likeComment(input: $input) {
      clientMutationId
      comment {
        ...CommentFragment
        ...CommentDateFragment
      }
    }
  }
`;
