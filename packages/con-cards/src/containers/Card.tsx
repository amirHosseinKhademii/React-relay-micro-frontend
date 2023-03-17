import { ICUnDone, ICTrash, ICDone, ICComments } from "pcg-commons";
import { Suspense } from "react";
import { TCard, useCard } from "../hooks";
import { Comments } from "con-comments";

export const Card = ({ card, __id, children }: TCard) => {
  const { onDelete, isComments, onCommentsToggle, cardFragment } = useCard({
    card,
    __id,
  });

  return (
    <li className="border border-cyan-500  rounded p-2 cursor-pointer overflow-hidden bg-cyan-200 w-full bg-cyan-100">
      <div className="flex items-center justify-between">
        <span> {cardFragment?.title}</span>

        <div className="flex items-center space-x-2">
          {!isComments && (
            <ICComments
              className=" text-green-300 w-5 mx-auto "
              onClick={onCommentsToggle}
            />
          )}
          {children}
          <ICTrash className="text-red-600 w-5" onClick={() => onDelete()}>
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
