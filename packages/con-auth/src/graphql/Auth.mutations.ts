import { graphql } from "react-relay";

export const AuthSignInMutation = graphql`
  mutation AuthSignInMutation($userName: String!, $password: String!) {
    signIn(userName: $userName, password: $password) {
      token
      user {
        id
      }
    }
  }
`;
