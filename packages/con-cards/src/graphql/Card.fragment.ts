import { graphql } from "react-relay";

export const CardFragment = graphql`
  fragment CardFragment on Card {
    title
    description
    id
  }
`;

export const CardActionFragment = graphql`
  fragment CardActionFragment on Card {
    isCompleted
    id
  }
`;
