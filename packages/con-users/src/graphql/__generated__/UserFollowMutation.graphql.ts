/**
 * @generated SignedSource<<603dbd1eb1e56ad9ee31f26f2d1e45db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowOrUnfollowInput = {
  clientMutationId?: string | null;
  id: string;
};
export type UserFollowMutation$variables = {
  input: FollowOrUnfollowInput;
};
export type UserFollowMutation$data = {
  readonly followOrUnfollow: {
    readonly clientMutationId: string | null;
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"UserFragment">;
    };
  } | null;
};
export type UserFollowMutation = {
  response: UserFollowMutation$data;
  variables: UserFollowMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserFollowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowOrUnfollowPayload",
        "kind": "LinkedField",
        "name": "followOrUnfollow",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserFollowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowOrUnfollowPayload",
        "kind": "LinkedField",
        "name": "followOrUnfollow",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ce0d2d2fa9916b5fe0004b104d9f28f1",
    "id": null,
    "metadata": {},
    "name": "UserFollowMutation",
    "operationKind": "mutation",
    "text": "mutation UserFollowMutation(\n  $input: FollowOrUnfollowInput!\n) {\n  followOrUnfollow(input: $input) {\n    clientMutationId\n    user {\n      ...UserFragment\n      id\n    }\n  }\n}\n\nfragment UserFragment on User {\n  id\n  userName\n  fullName\n  followers\n  followings\n}\n"
  }
};
})();

(node as any).hash = "41a061d7e07d5c52bd2b0b2da3e2aef7";

export default node;
