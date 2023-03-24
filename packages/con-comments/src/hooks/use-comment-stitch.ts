import { useFragment } from "react-relay";

import { FragmentRefs } from "relay-runtime";

import { CommentsStitchBaseFragment$key } from "../graphql/__generated__/CommentsStitchBaseFragment.graphql";
import { CommentsStitchBaseFragment } from "../graphql/CommentsStitch.fragments";

export type TCommentNodeBase = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<
      "CommentsStitchFragment" | string
    >;
  } | null;
};

export type TCommentStitch<T extends TCommentNodeBase> = {
  comment: T;
};

export const useCommentStitch = <T extends TCommentNodeBase>({
  comment,
}: TCommentStitch<T>) => {
  const commentFragment = useFragment<CommentsStitchBaseFragment$key>(
    CommentsStitchBaseFragment,
    comment.node
  );

  return {
    comment: commentFragment,
  };
};
