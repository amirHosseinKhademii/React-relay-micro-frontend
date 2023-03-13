/**
 * @generated SignedSource<<0850c77d1c0e2437f174b275e5b85bb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteCardInput = {
  clientMutationId?: string | null;
  id: string;
};
export type CardDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteCardInput;
};
export type CardDeleteMutation$data = {
  readonly deleteCard: {
    readonly clientMutationId: string | null;
    readonly id: string;
  } | null;
};
export type CardDeleteMutation = {
  response: CardDeleteMutation$data;
  variables: CardDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CardDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCardPayload",
        "kind": "LinkedField",
        "name": "deleteCard",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
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
    "name": "CardDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCardPayload",
        "kind": "LinkedField",
        "name": "deleteCard",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d640c4957836dd84ac69690fc673d23c",
    "id": null,
    "metadata": {},
    "name": "CardDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CardDeleteMutation(\n  $input: DeleteCardInput!\n) {\n  deleteCard(input: $input) {\n    clientMutationId\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "bec27cc7f224c07d19c66797f2661137";

export default node;
