/**
 * @generated SignedSource<<73d643fba69b706ccafd8bcf2d114867>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly isCompleted: boolean | null;
  readonly title: string;
  readonly " $fragmentType": "CardFragment";
};
export type CardFragment$key = {
  readonly " $data"?: CardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardFragment",
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
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "5c71538fcee302af9d7fbe7a98096efd";

export default node;
