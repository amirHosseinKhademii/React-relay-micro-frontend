/**
 * @generated SignedSource<<364beaa01123741d69dca336f1a343b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LikeCommentInput = {
  clientMutationId?: string | null;
  id: string;
};
export type CommentLikeMutation$variables = {
  input: LikeCommentInput;
};
export type CommentLikeMutation$data = {
  readonly likeComment: {
    readonly clientMutationId: string | null;
    readonly comment: {
      readonly " $fragmentSpreads": FragmentRefs<"CommentFragment">;
    };
  } | null;
};
export type CommentLikeMutation = {
  response: CommentLikeMutation$data;
  variables: CommentLikeMutation$variables;
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
    "name": "CommentLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LikeCommentPayload",
        "kind": "LinkedField",
        "name": "likeComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comment",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommentFragment"
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
    "name": "CommentLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LikeCommentPayload",
        "kind": "LinkedField",
        "name": "likeComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comment",
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
                "name": "likes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "created_at",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updated_at",
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
    "cacheID": "65dee12f5e11578169f1e75e3542ac46",
    "id": null,
    "metadata": {},
    "name": "CommentLikeMutation",
    "operationKind": "mutation",
    "text": "mutation CommentLikeMutation(\n  $input: LikeCommentInput!\n) {\n  likeComment(input: $input) {\n    clientMutationId\n    comment {\n      ...CommentFragment\n      id\n    }\n  }\n}\n\nfragment CommentFragment on Comment {\n  id\n  title\n  description\n  likes\n  created_at\n  updated_at\n}\n"
  }
};
})();

(node as any).hash = "c42a84c5c044ee78ae5b1b7e564ac3a9";

export default node;
