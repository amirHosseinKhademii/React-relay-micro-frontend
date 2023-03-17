/**
 * @generated SignedSource<<96e0ca8872a0041fde811d3d6df993c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateCardInput = {
  clientMutationId?: string | null;
  description?: string | null;
  id: string;
  isCompleted?: boolean | null;
  title?: string | null;
};
export type CardUpdateMutation$variables = {
  input: UpdateCardInput;
};
export type CardUpdateMutation$data = {
  readonly updateCard: {
    readonly card: {
      readonly " $fragmentSpreads": FragmentRefs<"CardActionFragment">;
    };
    readonly clientMutationId: string | null;
  } | null;
};
export type CardUpdateMutation = {
  response: CardUpdateMutation$data;
  variables: CardUpdateMutation$variables;
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
    "name": "CardUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCardPayload",
        "kind": "LinkedField",
        "name": "updateCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Card",
            "kind": "LinkedField",
            "name": "card",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CardActionFragment"
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
    "name": "CardUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCardPayload",
        "kind": "LinkedField",
        "name": "updateCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Card",
            "kind": "LinkedField",
            "name": "card",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isCompleted",
                "storageKey": null
              },
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
    ]
  },
  "params": {
    "cacheID": "27e597c650e15b3036df54533b9106b4",
    "id": null,
    "metadata": {},
    "name": "CardUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CardUpdateMutation(\n  $input: UpdateCardInput!\n) {\n  updateCard(input: $input) {\n    clientMutationId\n    card {\n      ...CardActionFragment\n      id\n    }\n  }\n}\n\nfragment CardActionFragment on Card {\n  isCompleted\n  id\n}\n"
  }
};
})();

(node as any).hash = "9ec94057d8746b809fe5fade8cbdbb5b";

export default node;
