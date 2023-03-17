import { graphql } from "react-relay";

export const CardFragment = graphql`
  fragment CardFragment on Card {
    title
    description
    id
    isCompleted
  }
`;
