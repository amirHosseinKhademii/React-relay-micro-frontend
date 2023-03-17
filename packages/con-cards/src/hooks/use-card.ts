import { useId, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { FragmentRefs } from "relay-runtime";
import {
  CardDeleteMutation,
  CardUpdateMutation,
} from "../graphql/Card.mutation";
import { CardFragment } from "../graphql/Card.fragment";
import { CardDeleteMutation as TCardDeleteMutation } from "../graphql/__generated__/CardDeleteMutation.graphql";
import { CardFragment$key } from "../graphql/__generated__/CardFragment.graphql";
import { CardUpdateMutation as TCardUpdateMutation } from "../graphql/__generated__/CardUpdateMutation.graphql";

export type TCard = {
  __id?: string;
  card: {
    readonly cursor: string | null;
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
    } | null;
  };
};

export const useCard = ({ __id, card }: TCard) => {
  const [isComments, setIsComments] = useState(false);

  const cardFragment = useFragment<CardFragment$key>(CardFragment, card.node);

  const [deleteCard] = useMutation<TCardDeleteMutation>(CardDeleteMutation);
  const [updateCard] = useMutation<TCardUpdateMutation>(CardUpdateMutation);
  const clientMutationId = useId();

  return {
    cardFragment,
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
            id: cardFragment?.id!,
            isCompleted: !cardFragment?.isCompleted,
            clientMutationId: clientMutationId,
          },
        },
        optimisticResponse: {
          updateCard: {
            card: {
              id: cardFragment?.id!,
              isCompleted: !cardFragment?.isCompleted,
              description: cardFragment?.description,
              title: cardFragment?.title,
            },
            clientMutationId: clientMutationId,
          },
        },
      }),
  };
};
