/**
 * @generated SignedSource<<bf9a49991a47b6c8b43c160f0b3456f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardsStitchBaseFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly isCompleted: boolean | null;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CommentsStitchFragment">;
  readonly " $fragmentType": "CardsStitchBaseFragment";
};
export type CardsStitchBaseFragment$key = {
  readonly " $data"?: CardsStitchBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardsStitchBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardsStitchBaseFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isCompleted",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentsStitchFragment"
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "349ad9d6e50d9817d0648939b8fb366d";

export default node;
