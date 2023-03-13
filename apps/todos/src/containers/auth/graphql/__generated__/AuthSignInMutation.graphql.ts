/**
 * @generated SignedSource<<f0f5c3b87ec70575b2351d350e15d7a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthSignInMutation$variables = {
  password: string;
  userName: string;
};
export type AuthSignInMutation$data = {
  readonly signIn: {
    readonly token: string;
    readonly user: {
      readonly id: string;
    };
  };
};
export type AuthSignInMutation = {
  response: AuthSignInMutation$data;
  variables: AuthSignInMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userName"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "userName",
        "variableName": "userName"
      }
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "signIn",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthSignInMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AuthSignInMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "db26de29db5b940c37a0a0770582967e",
    "id": null,
    "metadata": {},
    "name": "AuthSignInMutation",
    "operationKind": "mutation",
    "text": "mutation AuthSignInMutation(\n  $userName: String!\n  $password: String!\n) {\n  signIn(userName: $userName, password: $password) {\n    token\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "03659de6eb9bfafb036ef54e0d50fb72";

export default node;
