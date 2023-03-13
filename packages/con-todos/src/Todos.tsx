import { ICLoadMore, ICPlus } from "pcg-commons";
import { Suspense } from "react";
import { useTodos } from "./hooks";
import { Todo } from "./Todo";
import { TodosModal } from "./TodosModal";

export const Todos = () => {
  const { data, onLoadMore, isPending, onClose, onOpen, isOpen } = useTodos();

  return (
    <>
      <div
        className="rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-600 antialiased w-full col-span-1  "
        onClick={(e) => e.stopPropagation()}
      >
        <ICPlus
          className=" text-gray-800 w-9 ml-auto cursor-pointer "
          onClick={onOpen}
        />

        {data.todos.edges?.map((todo) => (
          <Suspense
            key={todo.node?.id}
            fallback={
              <div
                className={`mx-auto w-full border-green-500 bg-green-200 rounded border  p-4 shadow-lg `}
              />
            }
          >
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
      </div>
      {isOpen && <TodosModal {...{ onClose }} />}
    </>
  );
};
