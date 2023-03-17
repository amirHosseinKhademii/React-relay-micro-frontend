import { useFragment } from "react-relay";
import { CommentDateFragment } from "../graphql/Comment.fragment";

import { CommentDateFragment$key } from "../graphql/__generated__/CommentDateFragment.graphql";
import { TComment } from "./use-comment";

export type TCommentDate = Pick<TComment, "comment">;

export const useCommentDate = ({ comment }: TCommentDate) => {
  const commentDateFragment = useFragment<CommentDateFragment$key>(
    CommentDateFragment,
    comment.node
  );

  return {
    commentDateFragment,
  };
};
