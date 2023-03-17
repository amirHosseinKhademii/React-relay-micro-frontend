/**
 * @generated SignedSource<<8fe7e232956ce54f69dcfc44391932e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentDateFragment$data = {
  readonly created_at: any | null;
  readonly updated_at: any | null;
  readonly " $fragmentType": "CommentDateFragment";
};
export type CommentDateFragment$key = {
  readonly " $data"?: CommentDateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentDateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentDateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updated_at",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "0dd314cf34e47fa83b9f9afada9cc9ee";

export default node;
