import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlus } from "icons/ICPlus";
import { Card } from "./Card";
import { CardsModal } from "./CardsModal";
import { TCards, useCards } from "./hooks";

export const Cards = ({ todo, todoId }: TCards) => {
  const { data, isPending, onLoadMore, onClose, onOpen, isOpen } = useCards({
    todo,
    todoId,
  });

  return (
    <>
      <div>
        <ICPlus
          className=" mb-2 p-2 w-11 text-gray-600 ml-auto cursor-pointer "
          onClick={onOpen}
        />

        <ul
          className="rounded p-2  flex flex-col space-y-2 "
          onClick={(e) => e.stopPropagation()}
        >
          {data.cards.edges?.map((card) => (
            <Card key={card.node?.id} {...{ card }} __id={data.cards.__id} />
          ))}
          {data.cards.pageInfo?.hasNextPage && (
            <ICLoadMore
              className="w-8 text-cyan-300 ml-auto cursor-pointer"
              onClick={onLoadMore}
            />
          )}
          {isPending && "Loading more ..."}
        </ul>
      </div>
      {isOpen && <CardsModal {...{ onClose, todoId }} __id={data.cards.__id} />}
    </>
  );
};
