/**
 * @generated SignedSource<<6f3e2231033c202a64b7cb69bab0f2ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersBaseFragment$data = {
  readonly followers: ReadonlyArray<string>;
  readonly followings: ReadonlyArray<string>;
  readonly fullName: string;
  readonly id: string;
  readonly userName: string;
  readonly " $fragmentType": "UsersBaseFragment";
};
export type UsersBaseFragment$key = {
  readonly " $data"?: UsersBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UsersBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UsersBaseFragment",
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
      "name": "userName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followers",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followings",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9e12c7c205caf952f75440d2a0a6c420";

export default node;
