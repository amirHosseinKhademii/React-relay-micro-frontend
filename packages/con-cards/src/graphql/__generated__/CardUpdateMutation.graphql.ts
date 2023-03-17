/**
 * @generated SignedSource<<4946654a675593416397e513bdf0524a>>
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
      readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
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
                "name": "CardFragment"
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
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isCompleted",
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
    "cacheID": "dca8449dec70629150cf649682a98455",
    "id": null,
    "metadata": {},
    "name": "CardUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CardUpdateMutation(\n  $input: UpdateCardInput!\n) {\n  updateCard(input: $input) {\n    clientMutationId\n    card {\n      ...CardFragment\n      id\n    }\n  }\n}\n\nfragment CardFragment on Card {\n  title\n  description\n  id\n  isCompleted\n}\n"
  }
};
})();

(node as any).hash = "35c482d8185812333b3706b42e4d0617";

export default node;
