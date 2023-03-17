import { graphql } from "react-relay";

export const UserFragment = graphql`
  fragment UserFragment on User {
    id
    userName
    fullName
    followers
    followings
  }
`;

export const UserByIdFragment = graphql`
  fragment UserByIdFragment on User {
    id
    userName
    fullName
  }
`;
