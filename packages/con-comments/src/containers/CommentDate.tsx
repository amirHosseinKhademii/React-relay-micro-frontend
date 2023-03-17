import React from "react";
import { DateText } from "../components";
import { TCommentDate, useCommentDate } from "../hooks";

export const CommentDate = ({ comment }: TCommentDate) => {
  const { commentDateFragment } = useCommentDate({ comment });
  return (
    <>
      <DateText>
        Created: {commentDateFragment?.created_at?.slice(0, 10)}
      </DateText>
      <DateText>
        Updated:{commentDateFragment?.updated_at?.slice(0, 10)}
      </DateText>
    </>
  );
};
