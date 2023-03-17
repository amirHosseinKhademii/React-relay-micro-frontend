import { ICUnDone, ICTrash, ICDone, ICComments } from "pcg-commons";
import { Suspense } from "react";
import { TCard, useCard } from "../hooks";
import { Comments } from "con-comments";

export const Card = ({ card, __id }: TCard) => {
  const {
    onDelete,
    onCompleteToggle,
    isComments,
    onCommentsToggle,
    cardFragment,
  } = useCard({
    card,
    __id,
  });

  return (
    <li
      className={`border border-cyan-500  rounded p-2 cursor-pointer overflow-hidden bg-cyan-200 w-full  ${
        cardFragment?.isCompleted ? "bg-cyan-200" : "bg-cyan-100"
      }`}
    >
      <div className="flex items-center justify-between">
        <span> {cardFragment?.title}</span>

        <div className="flex items-center space-x-2">
          {!isComments && (
            <ICComments
              className=" text-green-300 w-5 mx-auto "
              onClick={onCommentsToggle}
            />
          )}
          {cardFragment?.isCompleted ? (
            <ICUnDone
              className="text-cyan-800 w-5"
              onClick={onCompleteToggle}
            />
          ) : (
            <ICDone className="text-gray-300 w-5" onClick={onCompleteToggle} />
          )}
          <ICTrash
            className="text-red-600 w-5"
            onClick={() => onDelete(cardFragment?.id!)}
          >
            Delete
          </ICTrash>
        </div>
      </div>
      {isComments && (
        <Suspense fallback={<div>Loading comments...</div>}>
          <Comments cardId={cardFragment?.id!} />
        </Suspense>
      )}
    </li>
  );
};
