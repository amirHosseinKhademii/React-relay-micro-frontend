import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { MessagesLazyQuery } from "../graphql/Messages.queries";
import { MessagesLazyQuery as TMessagesLazyQuery } from "../graphql/__generated__/MessagesLazyQuery.graphql";
import { MessagesPaginationFrgament } from "../graphql/__generated__/MessagesPaginationFrgament.graphql";
import { MessagesQueryFragment$key } from "../graphql/__generated__/MessagesQueryFragment.graphql";
import { MessagesQueryFragment } from "../graphql/Message.fragments";

export const useMessages = (chatId: string) => {
  const Messages = useLazyLoadQuery<TMessagesLazyQuery>(MessagesLazyQuery, {
    first: 5,
    query: { chatId },
  });

  const { data, loadNext } = usePaginationFragment<
    MessagesPaginationFrgament,
    MessagesQueryFragment$key
  >(MessagesQueryFragment, Messages);

  return {
    data,
  };
};
