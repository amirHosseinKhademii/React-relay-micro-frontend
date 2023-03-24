import { useState } from "react";
import { useFragment } from "react-relay";
import { FragmentRefs } from "relay-runtime";

import { CardsStitchBaseFragment } from "../graphql/CardsStitch.fragments";
import { CardsStitchBaseFragment$key } from "../graphql/__generated__/CardsStitchBaseFragment.graphql";

export type TCardNodeBase = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"CardsStitchFragment" | string>;
  } | null;
};

export type TCardStitch<T extends TCardNodeBase> = {
  card: T;
};

export const useCardStitch = <T extends TCardNodeBase>({
  card,
}: TCardStitch<T>) => {
  const cardFragment = useFragment<CardsStitchBaseFragment$key>(
    CardsStitchBaseFragment,
    card.node
  );

  return {
    card: cardFragment,
  };
};
