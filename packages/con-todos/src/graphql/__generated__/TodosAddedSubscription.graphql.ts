/**
 * @generated SignedSource<<15870a261762eb520acdfb85c861a603>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodosAddedSubscription$variables = {
  connections: ReadonlyArray<string>;
};
export type TodosAddedSubscription$data = {
  readonly todoAdded: {
    readonly __typename: "TodoResponseEdge";
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"TodosBaseFragment">;
    } | null;
  };
};
export type TodosAddedSubscription = {
  response: TodosAddedSubscription$data;
  variables: TodosAddedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodosAddedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoResponseEdge",
        "kind": "LinkedField",
        "name": "todoAdded",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodosBaseFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodosAddedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoResponseEdge",
        "kind": "LinkedField",
        "name": "todoAdded",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "node",
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
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "node",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "TodoEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "19953f0142b7d500de7d9eff4698170b",
    "id": null,
    "metadata": {},
    "name": "TodosAddedSubscription",
    "operationKind": "subscription",
    "text": "subscription TodosAddedSubscription {\n  todoAdded {\n    __typename\n    node {\n      ...TodosBaseFragment\n      id\n    }\n  }\n}\n\nfragment TodosBaseFragment on Todo {\n  title\n  description\n  id\n  isCompleted\n}\n"
  }
};
})();

(node as any).hash = "d913a4addbe0bfaeae838b34e4b2d224";

export default node;
