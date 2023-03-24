/**
 * @generated SignedSource<<741cb01f860bb900e781a76fc6e1c597>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardsStitchCommentBaseFragment$data = {
  readonly created_at: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly likes: ReadonlyArray<string>;
  readonly title: string;
  readonly updated_at: any | null;
  readonly " $fragmentType": "CardsStitchCommentBaseFragment";
};
export type CardsStitchCommentBaseFragment$key = {
  readonly " $data"?: CardsStitchCommentBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardsStitchCommentBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardsStitchCommentBaseFragment",
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

(node as any).hash = "49ec46f6db28a1a9e0a78fc823082427";

export default node;
