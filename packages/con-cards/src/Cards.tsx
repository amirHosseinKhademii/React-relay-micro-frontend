import { ICLoadMore } from "pcg-commons";
import { CardsCard } from "./components";
import { Card, CardsModal } from "./containers";
import { TCards, useCards } from "./hooks";

export const Cards = ({ todo, todoId }: TCards) => {
  const { data, isPending, onLoadMore, onClose, onOpen, isOpen } = useCards({
    todo,
    todoId,
  });

  return (
    <>
      <CardsCard {...{ onOpen }}>
        {data.cards.edges?.map((card) => (
          <Card key={card.cursor} {...{ card }} __id={data.cards.__id} />
        ))}
        {data.cards.pageInfo?.hasNextPage && (
          <ICLoadMore
            className="w-8 text-cyan-300 ml-auto cursor-pointer"
            onClick={onLoadMore}
          />
        )}
        {isPending && "Loading more ..."}
      </CardsCard>
      {isOpen && <CardsModal {...{ onClose, todoId }} __id={data.cards.__id} />}
    </>
  );
};
