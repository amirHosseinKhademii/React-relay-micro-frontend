/**
 * @generated SignedSource<<8d1a0e2d21613933ebdb5f83fb4ae961>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodosStitchTodoBaseFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly isCompleted: boolean | null;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CardsStitchFragment">;
  readonly " $fragmentType": "TodosStitchTodoBaseFragment";
};
export type TodosStitchTodoBaseFragment$key = {
  readonly " $data"?: TodosStitchTodoBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodosStitchTodoBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodosStitchTodoBaseFragment",
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
      "name": "isCompleted",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CardsStitchFragment"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "d5f7e3a0bc6a92fbcae6f1827585b018";

export default node;
