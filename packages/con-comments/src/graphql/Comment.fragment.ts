import { graphql } from "react-relay";

export const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    id
    title
    description
    likes
  }
`;

export const CommentDateFragment = graphql`
  fragment CommentDateFragment on Comment {
    created_at
    updated_at
  }
`;
