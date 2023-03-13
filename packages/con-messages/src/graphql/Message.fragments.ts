import { graphql } from "react-relay";

export const MessageBaseFragment = graphql`
  fragment MessageBaseFragment on Message {
    id
    body
    chatId
    user
    created_at
    updated_at
  }
`;

export const MessagesQueryFragment = graphql`
  fragment MessagesQueryFragment on Query
  @refetchable(queryName: "MessagesPaginationFrgament") {
    messages(
      before: $before
      after: $after
      first: $first
      last: $last
      query: $query
    ) @connection(key: "List__messages") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          body
          chatId
          user
          created_at
          updated_at
        }
      }
    }
  }
`;
