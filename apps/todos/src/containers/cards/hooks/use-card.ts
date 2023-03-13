import { useId, useState } from "react";
import { useMutation } from "react-relay";
import {
  CardDeleteMutation,
  CardUpdateMutation,
} from "containers/cards/graphql/Card.mutation";
import { CardDeleteMutation as TCardDeleteMutation } from "containers/cards/graphql/__generated__/CardDeleteMutation.graphql";
import { CardUpdateMutation as TCardUpdateMutation } from "containers/cards/graphql/__generated__/CardUpdateMutation.graphql";

export type TCard = {
  __id?: string;
  card: {
    readonly node: {
      readonly id: string;
      readonly title: string;
      readonly description: string | null;
      readonly isCompleted: boolean | null;
    } | null;
  };
};

export const useCard = ({ __id, card }: TCard) => {
  const [isComments, setIsComments] = useState(false);
  const [deleteCard] = useMutation<TCardDeleteMutation>(CardDeleteMutation);
  const [updateCard] = useMutation<TCardUpdateMutation>(CardUpdateMutation);
  const clientMutationId = useId();

  return {
    isComments,
    onCommentsToggle: () => setIsComments((prev) => !prev),
    onDelete: (id: string) => {
      deleteCard({
        variables: {
          connections: [__id!],
          input: {
            id,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteCard: {
            id,
            clientMutationId,
          },
        },
      });
    },
    onCompleteToggle: () =>
      updateCard({
        variables: {
          input: {
            id: card.node?.id!,
            isCompleted: !card.node?.isCompleted,
            clientMutationId: clientMutationId,
          },
        },
        optimisticResponse: {
          updateCard: {
            card: {
              id: card.node?.id!,
              isCompleted: !card.node?.isCompleted,
              description: card.node?.description,
              title: card.node?.title,
            },
            clientMutationId: clientMutationId,
          },
        },
      }),
  };
};
