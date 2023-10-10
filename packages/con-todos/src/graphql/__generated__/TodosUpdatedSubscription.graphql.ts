/**
 * @generated SignedSource<<64f6c34791656aa6371bfd72cc32fc42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type TodosUpdatedSubscription$variables = {};
export type TodosUpdatedSubscription$data = {
  readonly todoUpdated: {
    readonly __typename: "Todo";
    readonly description: string | null;
    readonly id: string;
    readonly isCompleted: boolean | null;
    readonly title: string;
  };
};
export type TodosUpdatedSubscription = {
  response: TodosUpdatedSubscription$data;
  variables: TodosUpdatedSubscription$variables;
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
    "name": "TodosUpdatedSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodosUpdatedSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b6df8661ab23f7ddfec520454058ddfa",
    "id": null,
    "metadata": {},
    "name": "TodosUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription TodosUpdatedSubscription {\n  todoUpdated {\n    __typename\n    id\n    title\n    description\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "b0a9d394bb28ba97b9f72e365897cb9f";

export default node;
