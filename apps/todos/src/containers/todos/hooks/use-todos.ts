import {
  useLazyLoadQuery,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { useState, useTransition } from "react";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodosQuery } from "containers/todos/graphql/Todos.queries";
import { TodosSubscription } from "containers/todos/graphql/Todos.subscriptions";
import { TodosFragment } from "containers/todos/graphql/Todos.fragment";
import { CardsUpdatedSubscription } from "containers/cards/graphql/Cards.subscriptions";

import type { TodosQuery as TTodosQuery } from "containers/todos/graphql/__generated__/TodosQuery.graphql";
import type { TodosPaginationFrgament } from "containers/todos/graphql/__generated__/TodosPaginationFrgament.graphql";
import type { TodosFragment$key } from "containers/todos/graphql/__generated__/TodosFragment.graphql";
import type { TodosSubscription as TTodosSubscription } from "containers/todos/graphql/__generated__/TodosSubscription.graphql";
import type { CardsUpdatedSubscription as TCardsUpdatedSubscription } from "containers/cards/graphql/__generated__/CardsUpdatedSubscription.graphql";

const todosSubscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> = {
  subscription: TodosSubscription,
  variables: {},
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

  useSubscription(todosSubscriptionConfig);

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
