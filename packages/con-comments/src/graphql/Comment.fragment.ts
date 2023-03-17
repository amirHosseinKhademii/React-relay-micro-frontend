import { graphql } from "react-relay";

export const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    id
    title
    description
    likes
    created_at
    updated_at
  }
`;
