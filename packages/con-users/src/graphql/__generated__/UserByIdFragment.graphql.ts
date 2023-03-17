/**
 * @generated SignedSource<<f48bf9ecb3c75e080be72febd84154ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserByIdFragment$data = {
  readonly fullName: string;
  readonly id: string;
  readonly userName: string;
  readonly " $fragmentType": "UserByIdFragment";
};
export type UserByIdFragment$key = {
  readonly " $data"?: UserByIdFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserByIdFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserByIdFragment",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e336b31cf77e9022a14e6a13a8b2b91b";

export default node;
