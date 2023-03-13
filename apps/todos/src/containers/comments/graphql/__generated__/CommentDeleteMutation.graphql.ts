/**
 * @generated SignedSource<<e280e18c460daf6f50210ae42c2aba81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteCommentInput = {
  clientMutationId?: string | null;
  id: string;
};
export type CommentDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteCommentInput;
};
export type CommentDeleteMutation$data = {
  readonly deleteComment: {
    readonly clientMutationId: string | null;
    readonly id: string;
  } | null;
};
export type CommentDeleteMutation = {
  response: CommentDeleteMutation$data;
  variables: CommentDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCommentPayload",
        "kind": "LinkedField",
        "name": "deleteComment",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CommentDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCommentPayload",
        "kind": "LinkedField",
        "name": "deleteComment",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6e8525eb6383d7ba5025fa1db38c2785",
    "id": null,
    "metadata": {},
    "name": "CommentDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CommentDeleteMutation(\n  $input: DeleteCommentInput!\n) {\n  deleteComment(input: $input) {\n    clientMutationId\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "251eac75a2487c93eae4e73613d91dd0";

export default node;
