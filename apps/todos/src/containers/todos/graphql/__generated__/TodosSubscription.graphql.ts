/**
 * @generated SignedSource<<7360a77ba0a73095bda6f1e5469a1a5d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type TodosSubscription$variables = {};
export type TodosSubscription$data = {
  readonly todoUpdated: {
    readonly __typename: "Todo";
    readonly description: string | null;
    readonly id: string;
    readonly isCompleted: boolean | null;
    readonly title: string;
  };
};
export type TodosSubscription = {
  response: TodosSubscription$data;
  variables: TodosSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todoUpdated",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
        "name": "isCompleted",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodosSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodosSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "18c2576b994e2cd618a66fd8a98248e2",
    "id": null,
    "metadata": {},
    "name": "TodosSubscription",
    "operationKind": "subscription",
    "text": "subscription TodosSubscription {\n  todoUpdated {\n    __typename\n    id\n    title\n    description\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "9637a505071c0fbd6509cd123a04b01a";

export default node;
