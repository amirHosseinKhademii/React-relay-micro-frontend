import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { useState, useTransition } from "react";
import { CommentsQuery } from "../graphql/Comments.queries";
import { CommentsPaginationFrgament } from "../graphql/__generated__/CommentsPaginationFrgament.graphql";
import { CommentsQueryFragment } from "../graphql/Comment.fragments";

import type { CommentsQuery as TCommentsQuery } from "../graphql/__generated__/CommentsQuery.graphql";
import type { CommentsQueryFragment$key } from "../graphql/__generated__/CommentsQueryFragment.graphql";

export const useComments = (cardId: string) => {
  const [isPending, startTransition] = useTransition();

  const comments = useLazyLoadQuery<TCommentsQuery>(CommentsQuery, {
    first: 1,
    cardId,
  });

  const { data, loadNext } = usePaginationFragment<
    CommentsPaginationFrgament,
    CommentsQueryFragment$key
  >(CommentsQueryFragment, comments);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (e: any) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);

  return {
    data,
    isPending,
    isOpen,
    onOpen,
    onClose,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(5);
      }),
  };
};
