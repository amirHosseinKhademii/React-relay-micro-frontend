import { graphql } from "react-relay";

export const CardsStitchFragment = graphql`
  fragment CardsStitchFragment on Todo
  @refetchable(queryName: "CardsStitchCardsPaginationFrgament") {
    cards(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__cards") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          ...CardsStitchBaseFragment
        }
      }
    }
  }
`;

export const CardsStitchCommentsFragment = graphql`
  fragment CardsStitchCommentsFragment on Card
  @refetchable(queryName: "CardsStitchCommentsPaginationFrgament") {
    comments(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__comments") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CardsStitchCommentBaseFragment
        }
      }
    }
  }
`;

export const CardsStitchBaseFragment = graphql`
  fragment CardsStitchBaseFragment on Card {
    title
    description
    id
    isCompleted
    ...CardsStitchCommentsFragment
  }
`;

export const CardsStitchCommentBaseFragment = graphql`
  fragment CardsStitchCommentBaseFragment on Comment {
    id
    title
    description
    created_at
    updated_at
    likes
  }
`;
