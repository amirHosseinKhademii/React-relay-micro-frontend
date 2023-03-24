import { CommentsStitch } from "con-comments";
import { ICLoadMore } from "pcg-commons";
import { CardsWrapper } from "./components";

import {
  TCardNodeBase,
  TCardsStitch,
  TCardStitch,
  useCardsStitch,
  useCardStitch,
} from "./hooks";

const CardStitch = <T extends TCardNodeBase>(props: TCardStitch<T>) => {
  const { card } = useCardStitch(props);

  return (
    <div className="bg-green-300 m-2 p-2">
      <div>{card?.title}</div>
      <div>{card?.description}</div>
      <CommentsStitch {...{ card }} />
    </div>
  );
};

export const CardsStitch = ({ todo }: TCardsStitch) => {
  const { data, isPending, onLoadMore, onOpen } = useCardsStitch({
    todo,
  });

  return (
    <>
      <CardsWrapper {...{ onOpen }}>
        {data?.cards.edges?.map((card) => (
          <CardStitch {...{ card }} key={card.cursor} />
        ))}
        {data?.cards.pageInfo?.hasNextPage && (
          <ICLoadMore
            className="w-8 text-cyan-300 ml-auto cursor-pointer"
            onClick={onLoadMore}
          />
        )}
        {isPending && "Loading more ..."}
      </CardsWrapper>
    </>
  );
};
