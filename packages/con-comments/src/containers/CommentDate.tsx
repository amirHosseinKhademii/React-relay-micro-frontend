import { DateText } from "../components";
import { TCommentDate, useCommentDate } from "../hooks";

export const CommentDate = ({ comment }: TCommentDate) => {
  const { commentDateFragment } = useCommentDate({ comment });

  const createdDate =
    commentDateFragment?.created_at ?? new Date().toISOString();
  const updatedDate =
    commentDateFragment?.updated_at ?? new Date().toISOString();

  return (
    <>
      <DateText>Created: {createdDate?.slice(0, 10)}</DateText>
      <DateText>Updated:{updatedDate?.slice(0, 10)}</DateText>
    </>
  );
};
