/**
 * @generated SignedSource<<6ad9d263d06ba368384b3305f30b8cdc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentBaseFragment$data = {
  readonly created_at: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly likes: ReadonlyArray<string>;
  readonly title: string;
  readonly updated_at: any | null;
  readonly " $fragmentType": "CommentBaseFragment";
};
export type CommentBaseFragment$key = {
  readonly " $data"?: CommentBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentBaseFragment",
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

(node as any).hash = "47432d4b9b4eb164297609c2649f863b";

export default node;
