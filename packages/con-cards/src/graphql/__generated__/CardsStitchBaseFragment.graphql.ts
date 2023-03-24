/**
 * @generated SignedSource<<55e9a1fb9e9171f9007b40d641aee0f2>>
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
  readonly " $fragmentSpreads": FragmentRefs<"CardsStitchCommentsFragment">;
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
      "name": "CardsStitchCommentsFragment"
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "3278aa37d223ee501d0e662ee0678cd6";

export default node;
