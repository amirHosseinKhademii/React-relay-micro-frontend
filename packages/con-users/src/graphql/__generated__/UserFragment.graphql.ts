/**
 * @generated SignedSource<<c512172c48265901b996135a2c5de0cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserFragment$data = {
  readonly followers: ReadonlyArray<string>;
  readonly followings: ReadonlyArray<string>;
  readonly fullName: string;
  readonly id: string;
  readonly userName: string;
  readonly " $fragmentType": "UserFragment";
};
export type UserFragment$key = {
  readonly " $data"?: UserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserFragment",
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

(node as any).hash = "93a60e4e6003d68dccf48239915585cd";

export default node;
