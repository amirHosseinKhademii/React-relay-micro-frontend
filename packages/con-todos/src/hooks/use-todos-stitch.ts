import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { useState, useTransition } from "react";
import {
  TodosStitchFragment,
  TodosStitchQuery,
} from "../graphql/TodosStitch.queries";
import { TodosStitchQuery as TTodosStitchQuery } from "../graphql/__generated__/TodosStitchQuery.graphql";
import { TodosStitchFragment$key } from "../graphql/__generated__/TodosStitchFragment.graphql";
import { TodosStitchPaginationFrgament } from "../graphql/__generated__/TodosStitchPaginationFrgament.graphql";

export const useTodosStitch = () => {
  const [isPending, startTransition] = useTransition();

  const todos = useLazyLoadQuery<TTodosStitchQuery>(TodosStitchQuery, {
    first: 3,
  });

  const { data, loadNext } = usePaginationFragment<
    TodosStitchPaginationFrgament,
    TodosStitchFragment$key
  >(TodosStitchFragment, todos);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
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
