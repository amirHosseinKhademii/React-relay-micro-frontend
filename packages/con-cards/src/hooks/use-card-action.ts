import { useId } from "react";
import { useFragment, useMutation } from "react-relay";

import { CardUpdateMutation } from "../graphql/Card.mutation";
import { CardActionFragment } from "../graphql/Card.fragment";

import { CardUpdateMutation as TCardUpdateMutation } from "../graphql/__generated__/CardUpdateMutation.graphql";
import { TCard } from "./use-card";
import { CardActionFragment$key } from "../graphql/__generated__/CardActionFragment.graphql";

export type TCardAction = Pick<TCard, "card">;

export const useCardAction = ({ card }: TCardAction) => {
  const cardActionFragment = useFragment<CardActionFragment$key>(
    CardActionFragment,
    card.node
  );

  const [updateCard] = useMutation<TCardUpdateMutation>(CardUpdateMutation);

  const clientMutationId = useId();

  return {
    cardActionFragment,
    onCompleteToggle: () =>
      updateCard({
        variables: {
          input: {
            id: cardActionFragment?.id!,
            isCompleted: !cardActionFragment?.isCompleted,
            clientMutationId: clientMutationId,
          },
        },
        optimisticResponse: {
          updateCard: {
            card: {
              id: cardActionFragment?.id!,
              isCompleted: !cardActionFragment?.isCompleted,
            },
            clientMutationId: clientMutationId,
          },
        },
      }),
  };
};
