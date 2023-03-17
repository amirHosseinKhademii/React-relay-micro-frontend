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
        <div className="flex flex-col">
          <span> {cardFragment?.title}</span>
          <span className="text-sm"> {cardFragment?.description}</span>
        </div>

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
        <Suspense
          fallback={
            <div className=" p-2 w-full h-20 animate-pulse rounded border bg-cyan-300 "></div>
          }
        >
          <Comments cardId={cardFragment?.id!} />
        </Suspense>
      )}
    </li>
  );
};
