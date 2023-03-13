import { graphql } from "react-relay";

export const TodosFragment = graphql`
  fragment TodosFragment on Query
  @refetchable(queryName: "TodosPaginationFrgament") {
    todos(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__todos") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const TodosBaseFragment = graphql`
  fragment TodosBaseFragment on Todo {
    title
    description
    id
    isCompleted
  }
`;
