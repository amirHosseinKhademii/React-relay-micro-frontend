/**
 * @generated SignedSource<<2ff6c2b309e35cb6d1502bfbb9fc0d3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessageBaseFragment$data = {
  readonly body: string;
  readonly chatId: string;
  readonly created_at: any | null;
  readonly id: string;
  readonly updated_at: any | null;
  readonly user: string;
  readonly " $fragmentType": "MessageBaseFragment";
};
export type MessageBaseFragment$key = {
  readonly " $data"?: MessageBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MessageBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MessageBaseFragment",
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
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chatId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "user",
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
  "type": "Message",
  "abstractKey": null
};

(node as any).hash = "0c53c4edfc27a4ed95eda135a25f7ee9";

export default node;
