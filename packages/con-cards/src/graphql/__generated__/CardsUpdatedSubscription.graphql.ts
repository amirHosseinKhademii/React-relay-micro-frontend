/**
 * @generated SignedSource<<517934cfbb88893ec499d10b5466153e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type CardsUpdatedSubscription$variables = {};
export type CardsUpdatedSubscription$data = {
  readonly cardUpdated: {
    readonly __typename: "Card";
    readonly description: string | null;
    readonly id: string;
    readonly isCompleted: boolean | null;
    readonly title: string;
  };
};
export type CardsUpdatedSubscription = {
  response: CardsUpdatedSubscription$data;
  variables: CardsUpdatedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "cardUpdated",
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
    "name": "CardsUpdatedSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CardsUpdatedSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "88027789de316ed3207600f42f346adc",
    "id": null,
    "metadata": {},
    "name": "CardsUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription CardsUpdatedSubscription {\n  cardUpdated {\n    __typename\n    id\n    title\n    description\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "421919d440c20dbdd6604252671e383d";

export default node;
