/**
 * @generated SignedSource<<299ea87facd4d55b2512561ef0be904b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type CardsSubscription$variables = {};
export type CardsSubscription$data = {
  readonly cardAdded: {
    readonly __typename: "Card";
    readonly description: string | null;
    readonly id: string;
    readonly isCompleted: boolean | null;
    readonly title: string;
  };
};
export type CardsSubscription = {
  response: CardsSubscription$data;
  variables: CardsSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "cardAdded",
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
    "name": "CardsSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CardsSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5a2b935a6c5bc6af980ba252d8d80e9b",
    "id": null,
    "metadata": {},
    "name": "CardsSubscription",
    "operationKind": "subscription",
    "text": "subscription CardsSubscription {\n  cardAdded {\n    __typename\n    id\n    title\n    description\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "639fa8e8e56fa24c00df0b66911d313f";

export default node;
