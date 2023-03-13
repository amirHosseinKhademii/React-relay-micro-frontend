import { TodoAddMutation } from "containers/todos/graphql/Todo.mutations";
import { TodoAddMutation as TTodoAddMutation } from "containers/todos/graphql/__generated__/TodoAddMutation.graphql";
import { useId } from "react";
import { useMutation } from "react-relay";

export type TUseTodosModal = { onClose: () => void };

export const useTodosModal = ({ onClose }: TUseTodosModal) => {
  const [mutate] = useMutation<TTodoAddMutation>(TodoAddMutation);

  const clientMutationId = useId();

  return {
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: ["client:root:__List__todos_connection"],
          input: {
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addTodo: {
            addTodoEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
                isCompleted: false,
              },
              cursor: clientMutationId,
            },
            clientMutationId,
          },
        },
        optimisticUpdater: onClose,
      });
    },
  };
};
