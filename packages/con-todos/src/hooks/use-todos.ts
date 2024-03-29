import {
  useLazyLoadQuery,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { useMemo, useState, useTransition } from "react";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodosQuery } from "../graphql/Todos.queries";
import {
  TodosAddedSubscription,
  TodosUpdatedSubscription,
} from "../graphql/Todos.subscriptions";
import { TodosFragment } from "../graphql/Todos.fragment";
import { CardsUpdatedSubscription } from "con-cards";

import type { TodosQuery as TTodosQuery } from "../graphql/__generated__/TodosQuery.graphql";
import type { TodosPaginationFrgament } from "../graphql/__generated__/TodosPaginationFrgament.graphql";
import type { TodosFragment$key } from "../graphql/__generated__/TodosFragment.graphql";
import type { TodosSubscription as TTodosSubscription } from "../graphql/__generated__/TodosSubscription.graphql";
import type { TCardsUpdatedSubscription } from "con-cards";

const todosUpdatedSubscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> =
  {
    subscription: TodosUpdatedSubscription,
    variables: {},
  };

const todosAddedSubscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> =
  {
    subscription: TodosAddedSubscription,
    variables: {},
    onNext: (response) => {
      console.log({ response });
    },
  };

const cardsSubscriptionConfig: GraphQLSubscriptionConfig<TCardsUpdatedSubscription> =
  {
    subscription: CardsUpdatedSubscription,
    variables: {},
  };

export const useTodos = () => {
  const [isPending, startTransition] = useTransition();

  const todos = useLazyLoadQuery<TTodosQuery>(TodosQuery, { first: 3 });

  const { data, loadNext } = usePaginationFragment<
    TodosPaginationFrgament,
    TodosFragment$key
  >(TodosFragment, todos);

  useSubscription(todosUpdatedSubscriptionConfig);

  const todoAddedSubscriptionConfig = useMemo(
    () => ({
      subscription: TodosAddedSubscription,
      variables: {
        connections: [data.todos.__id],
      },
    }),
    [data.todos.__id]
  );

  useSubscription(todoAddedSubscriptionConfig);

  useSubscription(cardsSubscriptionConfig);

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
