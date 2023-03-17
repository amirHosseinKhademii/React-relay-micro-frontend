import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { useState, useTransition } from "react";
import { CommentsQuery } from "../graphql/Comments.queries";
import { CommentsPaginationFrgament } from "../graphql/__generated__/CommentsPaginationFrgament.graphql";

import type { CommentsQuery as TCommentsQuery } from "../graphql/__generated__/CommentsQuery.graphql";
import type { CommentsFragment$key } from "../graphql/__generated__/CommentsFragment.graphql";
import { CommentsFragment } from "../graphql/Comments.fragment";

export const useComments = (cardId: string) => {
  const [isPending, startTransition] = useTransition();

  const [isOpen, setIsOpen] = useState(false);

  const [includeDate, setIncludeDate] = useState(false);

  const comments = useLazyLoadQuery<TCommentsQuery>(CommentsQuery, {
    first: 1,
    cardId,
    isDate: includeDate,
  });

  const { data, loadNext } = usePaginationFragment<
    CommentsPaginationFrgament,
    CommentsFragment$key
  >(CommentsFragment, comments);

  const onOpen = (e: any) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);

  const onIncludeDateToggle = (isIncludeDate: boolean) =>
    setIncludeDate(isIncludeDate);

  return {
    onIncludeDateToggle,
    includeDate,
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
