import {
  TodoDeleteMutation,
  TodoUpdateMutation,
} from "../graphql/Todo.mutations";
import type { TodoUpdateMutation as TTodoUpdateMutation } from "../graphql/__generated__/TodoUpdateMutation.graphql";
import { useLazyLoadQuery, useMutation } from "react-relay";
import type { TodoQuery as TTodoQuery } from "../graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "../graphql/Todo.queries";
import { useId } from "react";
import { TodoDeleteMutation as TTodoDeleteMutation } from "../graphql/__generated__/TodoDeleteMutation.graphql";

export const useTodo = (id: string, __id: string) => {
  const { node: todo } = useLazyLoadQuery<TTodoQuery>(TodoQuery, { id });
  const [updateTodo] = useMutation<TTodoUpdateMutation>(TodoUpdateMutation);
  const [deleteTodo] = useMutation<TTodoDeleteMutation>(TodoDeleteMutation);
  const clientMutationId = useId();

  return {
    todo,
    onUpdate: () =>
      updateTodo({
        variables: {
          input: {
            id: todo?.id!,
            isCompleted: !todo?.isCompleted,
            clientMutationId: clientMutationId,
          },
        },
        optimisticResponse: {
          updateTodo: {
            todo: {
              id: todo?.id!,
              isCompleted: !todo?.isCompleted,
              description: todo?.description,
              title: todo?.title,
            },
            clientMutationId: clientMutationId,
          },
        },
      }),
    onDelete: () => {
      deleteTodo({
        variables: {
          connections: [__id!],
          input: {
            id,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteTodo: {
            id,
            clientMutationId,
          },
        },
      });
    },
  };
};
