/**
 * @generated SignedSource<<a018b65497a6878276fb2d1c54ae4399>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersByIdsFragment$data = {
  readonly usersByIds: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly cursor: string | null;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"UserByIdFragment">;
      } | null;
    }> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    } | null;
  };
  readonly " $fragmentType": "UsersByIdsFragment";
};
export type UsersByIdsFragment$key = {
  readonly " $data"?: UsersByIdsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UsersByIdsFragment">;
};

import UsersByIdsPaginationFrgament_graphql from './UsersByIdsPaginationFrgament.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "usersByIds"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "before"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "ids"
    },
    {
      "kind": "RootArgument",
      "name": "last"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": UsersByIdsPaginationFrgament_graphql
    }
  },
  "name": "UsersByIdsFragment",
  "selections": [
    {
      "alias": "usersByIds",
      "args": [
        {
          "kind": "Variable",
          "name": "ids",
          "variableName": "ids"
        }
      ],
      "concreteType": "UsersConnection",
      "kind": "LinkedField",
      "name": "__List__usersByIds_connection",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "UserByIdFragment"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "1a0d6971eb9e0507a218fc0de7a39d34";

export default node;
