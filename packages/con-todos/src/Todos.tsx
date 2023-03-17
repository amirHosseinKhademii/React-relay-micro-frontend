import { ICLoadMore, ICPlus } from "pcg-commons";
import { Suspense } from "react";
import { TodosCard, TodosFallBack } from "./components";
import { useTodos } from "./hooks";
import { Todo, TodosModal } from "./containers";

export const Todos = () => {
  const { data, onLoadMore, isPending, onClose, onOpen, isOpen } = useTodos();

  return (
    <>
      <TodosCard>
        <ICPlus
          className=" text-gray-800 w-9 ml-auto cursor-pointer "
          onClick={onOpen}
        />

        {data.todos.edges?.map((todo) => (
          <Suspense key={todo.node?.id} fallback={<TodosFallBack />}>
            <Todo
              key={todo.node?.id}
              id={todo.node?.id!}
              __id={data.todos.__id}
            />
          </Suspense>
        ))}
        {data.todos.pageInfo?.hasNextPage && (
          <ICLoadMore
            className="ml-auto w-10 text-gray-400 cursor-pointer"
            onClick={onLoadMore}
          />
        )}
        {isPending && "Loading more ..."}
      </TodosCard>
      {isOpen && <TodosModal {...{ onClose }} />}
    </>
  );
};
