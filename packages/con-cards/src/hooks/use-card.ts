import { useId, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { FragmentRefs } from "relay-runtime";
import { CardDeleteMutation } from "../graphql/Card.mutation";
import { CardFragment } from "../graphql/Card.fragment";
import { CardDeleteMutation as TCardDeleteMutation } from "../graphql/__generated__/CardDeleteMutation.graphql";
import { CardFragment$key } from "../graphql/__generated__/CardFragment.graphql";

export type TCard = {
  children?: React.ReactNode;
  __id?: string;
  card: {
    readonly cursor: string | null;
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<
        "CardFragment" | "CardActionFragment"
      >;
    } | null;
  };
};

export const useCard = ({ __id, card }: TCard) => {
  const [isComments, setIsComments] = useState(false);

  const cardFragment = useFragment<CardFragment$key>(CardFragment, card.node);

  const [deleteCard] = useMutation<TCardDeleteMutation>(CardDeleteMutation);

  const clientMutationId = useId();

  return {
    cardFragment,
    isComments,
    onCommentsToggle: () => setIsComments((prev) => !prev),
    onDelete: () => {
      deleteCard({
        variables: {
          connections: [__id!],
          input: {
            id: cardFragment?.id!,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteCard: {
            id: cardFragment?.id!,
            clientMutationId,
          },
        },
      });
    },
  };
};
