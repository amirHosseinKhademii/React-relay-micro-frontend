import { graphql } from "react-relay";

export const TodosStitchQuery = graphql`
  query TodosStitchQuery(
    $before: String
    $after: String
    $first: Float
    $last: Float
  ) {
    ...TodosStitchFragment
  }
`;

export const TodosStitchFragment = graphql`
  fragment TodosStitchFragment on Query
  @refetchable(queryName: "TodosStitchPaginationFrgament") {
    todos(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__todos") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...TodosStitchTodoBaseFragment
        }
      }
    }
  }
`;

export const TodosStitchTodoBaseFragment = graphql`
  fragment TodosStitchTodoBaseFragment on Todo {
    id
    title
    description
    isCompleted
    ...CardsStitchFragment
  }
`;
