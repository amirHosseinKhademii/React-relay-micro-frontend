import {
  TTodoNodeBase,
  TTodoStitch,
  useTodosStitch,
  useTodoStitch,
} from "./hooks";
import { CardsStitch } from "con-cards";
import { ICLoadMore } from "pcg-commons";

const TodoStitch = <T extends TTodoNodeBase>(props: TTodoStitch<T>) => {
  const { todo } = useTodoStitch(props);

  return (
    <div className="bg-cyan-300 m-2 p-2">
      <div>{todo?.title}</div>
      <div>{todo?.description}</div>
      <CardsStitch {...{ todo }} />
    </div>
  );
};

export const TodosStitch = () => {
  const { data: stitchData, onLoadMore, isPending } = useTodosStitch();

  return (
    <div className="bg-white p-10">
      {stitchData.todos.edges?.map((todo, key) => (
        <TodoStitch {...{ todo }} key={key} />
      ))}
      {stitchData?.todos.pageInfo?.hasNextPage && (
        <ICLoadMore
          className="ml-auto w-10 text-gray-400 cursor-pointer"
          onClick={onLoadMore}
        />
      )}
      {isPending && "Loading more ..."}
    </div>
  );
};
