/**
 * @generated SignedSource<<2905de5a5f746b1bd010da6025e0433c>>
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
      readonly " $fragmentSpreads": FragmentRefs<"UsersBaseFragment">;
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
                "name": "UsersBaseFragment"
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
    "cacheID": "d2e42564fced5efd4da88053056e5328",
    "id": null,
    "metadata": {},
    "name": "UserFollowMutation",
    "operationKind": "mutation",
    "text": "mutation UserFollowMutation(\n  $input: FollowOrUnfollowInput!\n) {\n  followOrUnfollow(input: $input) {\n    clientMutationId\n    user {\n      ...UsersBaseFragment\n      id\n    }\n  }\n}\n\nfragment UsersBaseFragment on User {\n  id\n  userName\n  fullName\n  followers\n  followings\n}\n"
  }
};
})();

(node as any).hash = "cc1b29189957cbd9e3fe91772810c030";

export default node;
