/**
 * @generated SignedSource<<4e55015c6d57d4cfb5ee593baeea224c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly likes: ReadonlyArray<string>;
  readonly title: string;
  readonly " $fragmentType": "CommentFragment";
};
export type CommentFragment$key = {
  readonly " $data"?: CommentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentFragment",
  "selections": [
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
      "name": "likes",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "2e7591950bb2ce2bbca41b4e90b7956d";

export default node;
