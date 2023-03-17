import { ICLoadMore, ICPlus } from "pcg-commons";

import { CommentModal, Comment, CommentDate } from "./containers";
import { useComments } from "./hooks";

export const Comments = ({ cardId }: { cardId: string }) => {
  const {
    data,
    onLoadMore,
    isPending,
    onOpen,
    isOpen,
    onClose,
    includeDate,
    onIncludeDateToggle,
  } = useComments(cardId);

  return (
    <>
      <div className="w-full">
        <ICPlus
          className=" mb-2 p-2 w-8 text-gray-600 ml-auto cursor-pointer "
          onClick={onOpen}
        />
        <input
          type="checkbox"
          checked={includeDate}
          onChange={(e: any) => onIncludeDateToggle(e.target.checked)}
        />
        <div className="flex flex-col space-y-2 my-2">
          {data?.comments?.edges?.map((comment) => (
            <Comment
              {...{ comment }}
              key={comment.cursor}
              __id={data.comments.__id}
            >
              {includeDate && <CommentDate {...{ comment }} />}
            </Comment>
          ))}
        </div>

        {data.comments.pageInfo?.hasNextPage && (
          <ICLoadMore
            className=" text-xs w-6 ml-auto text-cyan-300 "
            onClick={onLoadMore}
          />
        )}
        {isPending && "Loading more ..."}
      </div>
      {isOpen && (
        <CommentModal {...{ cardId, onClose }} __id={data.comments.__id} />
      )}
    </>
  );
};
