import { useState, useTransition } from "react";
import { usePaginationFragment } from "react-relay";
import { CardsFragment } from "../graphql/Cards.fragment";
import { CardsStitchFragment } from "../graphql/CardsStitch.fragments";

import type { CardsFragment$key } from "../graphql/__generated__/CardsFragment.graphql";
import { CardsStitchFragment$key } from "../graphql/__generated__/CardsStitchFragment.graphql";

export type TCardsStitch = { todo: CardsStitchFragment$key | null };

export const useCardsStitch = ({ todo }: TCardsStitch) => {
  const [isPending, startTransition] = useTransition();

  const { data, loadNext } = usePaginationFragment(CardsStitchFragment, todo);

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
        loadNext(2);
      }),
  };
};
