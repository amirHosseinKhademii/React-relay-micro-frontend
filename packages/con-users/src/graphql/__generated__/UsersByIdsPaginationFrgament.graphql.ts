/**
 * @generated SignedSource<<48d987ddcca7c4eb66462c2f371f98c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersByIdsPaginationFrgament$variables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  ids: ReadonlyArray<string>;
  last?: number | null;
};
export type UsersByIdsPaginationFrgament$data = {
  readonly " $fragmentSpreads": FragmentRefs<"UsersByIdsFragment">;
};
export type UsersByIdsPaginationFrgament = {
  response: UsersByIdsPaginationFrgament$data;
  variables: UsersByIdsPaginationFrgament$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ids"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "last"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "ids"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersByIdsPaginationFrgament",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UsersByIdsFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersByIdsPaginationFrgament",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UsersConnection",
        "kind": "LinkedField",
        "name": "usersByIds",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserPageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
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
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "ids"
        ],
        "handle": "connection",
        "key": "List__usersByIds",
        "kind": "LinkedHandle",
        "name": "usersByIds"
      }
    ]
  },
  "params": {
    "cacheID": "06c21a09c3ec4703f2ba13c1fa02dc84",
    "id": null,
    "metadata": {},
    "name": "UsersByIdsPaginationFrgament",
    "operationKind": "query",
    "text": "query UsersByIdsPaginationFrgament(\n  $after: String\n  $before: String\n  $first: Float\n  $ids: [ID!]!\n  $last: Float\n) {\n  ...UsersByIdsFragment\n}\n\nfragment UserByIdFragment on User {\n  id\n  userName\n  fullName\n}\n\nfragment UsersByIdsFragment on Query {\n  usersByIds(before: $before, after: $after, first: $first, last: $last, ids: $ids) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      cursor\n      node {\n        ...UserByIdFragment\n        id\n        __typename\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1a0d6971eb9e0507a218fc0de7a39d34";

export default node;
