import { useState, useTransition } from "react";
import { usePaginationFragment } from "react-relay";
import { CardsFragment } from "../graphql/Cards.fragment";

import type { CardsFragment$key } from "../graphql/__generated__/CardsFragment.graphql";

export type TCards = { todo: CardsFragment$key; todoId: string };

export const useCards = ({ todo }: TCards) => {
  const [isPending, startTransition] = useTransition();

  const { data, loadNext } = usePaginationFragment(CardsFragment, todo);

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
