import { usePaginationFragment } from "react-relay";
import { useState, useTransition } from "react";

import { CommentsStitchFragment$key } from "../graphql/__generated__/CommentsStitchFragment.graphql";
import { CommentsStitchPaginationFrgament } from "../graphql/__generated__/CommentsStitchPaginationFrgament.graphql";
import { CommentsStitchFragment } from "../graphql/CommentsStitch.fragments";

export type TCommentsStitch = { card: CommentsStitchFragment$key | null };

export const useCommentsStitch = ({ card }: TCommentsStitch) => {
  const [isPending, startTransition] = useTransition();

  const [isOpen, setIsOpen] = useState(false);

  const { data, loadNext } = usePaginationFragment<
    CommentsStitchPaginationFrgament,
    CommentsStitchFragment$key
  >(CommentsStitchFragment, card);

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
