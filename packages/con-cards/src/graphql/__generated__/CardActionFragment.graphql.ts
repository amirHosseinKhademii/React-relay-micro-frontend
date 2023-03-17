/**
 * @generated SignedSource<<b62eab272393cc37c5f17f13bb8d363f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardActionFragment$data = {
  readonly id: string;
  readonly isCompleted: boolean | null;
  readonly " $fragmentType": "CardActionFragment";
};
export type CardActionFragment$key = {
  readonly " $data"?: CardActionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardActionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardActionFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isCompleted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "b1bc58d4a8448d49c5d8b4054256a546";

export default node;
