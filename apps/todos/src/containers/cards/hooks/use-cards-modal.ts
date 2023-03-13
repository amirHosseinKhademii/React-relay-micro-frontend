import { useId } from "react";
import { useMutation } from "react-relay";
import { CardAddMutation } from "containers/cards/graphql/Card.mutation";

import type { CardAddMutation as TCardAddMutation } from "containers/cards/graphql/__generated__/CardAddMutation.graphql";

export type TUseCards = {
  onClose: () => void;
  __id: string;
  todoId: string;
};

export const useCardsModal = ({ onClose, __id, todoId }: TUseCards) => {
  const [mutate] = useMutation<TCardAddMutation>(CardAddMutation);

  const clientMutationId = useId();

  return {
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: [__id],
          input: {
            todoId,
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addCard: {
            addCardEdge: {
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
