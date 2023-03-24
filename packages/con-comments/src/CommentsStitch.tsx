import { ICLoadMore } from "pcg-commons";
import {
  TCommentNodeBase,
  TCommentsStitch,
  TCommentStitch,
  useCommentsStitch,
  useCommentStitch,
} from "./hooks";

const CommentStitch = <T extends TCommentNodeBase>(
  props: TCommentStitch<T>
) => {
  const { comment } = useCommentStitch(props);

  return (
    <div className="bg-red-300 m-2 p-2">
      <div>{comment?.title}</div>
      <div>{comment?.description}</div>
    </div>
  );
};

export const CommentsStitch = ({ card }: TCommentsStitch) => {
  const { data, isPending, onLoadMore } = useCommentsStitch({
    card,
  });

  return (
    <div className="bg-white p-10">
      {data?.comments.edges?.map((comment) => (
        <CommentStitch {...{ comment }} key={comment.cursor} />
      ))}
      {data?.comments.pageInfo?.hasNextPage && (
        <ICLoadMore
          className="ml-auto w-10 text-gray-400 cursor-pointer"
          onClick={onLoadMore}
        />
      )}
      {isPending && "Loading more ..."}
    </div>
  );
};
