/**
 * @generated SignedSource<<f01363ca8867b23992e83ccffd7bb38f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentsStitchBaseFragment$data = {
  readonly created_at: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly likes: ReadonlyArray<string>;
  readonly title: string;
  readonly updated_at: any | null;
  readonly " $fragmentType": "CommentsStitchBaseFragment";
};
export type CommentsStitchBaseFragment$key = {
  readonly " $data"?: CommentsStitchBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentsStitchBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentsStitchBaseFragment",
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
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updated_at",
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

(node as any).hash = "53fd9246cb63fea734bfac14cecba499";

export default node;
