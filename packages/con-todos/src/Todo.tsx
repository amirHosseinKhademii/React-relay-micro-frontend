import { Cards } from "con-cards";
import { ICDone, ICTrash, ICUnDone } from "pcg-commons";
import { useTodo } from "./hooks";

export const Todo = ({ id, __id }: { id: string; __id: string }) => {
  const { todo, onUpdate, onDelete } = useTodo(id, __id);
  return (
    <div
      className={`mx-auto w-full rounded border border-green-500    p-4 shadow-lg ${
        todo?.isCompleted ? "bg-green-100" : "bg-cyan-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl "> {todo?.title}</span>
        <div className="flex items-center space-x-2 ">
          {todo?.isCompleted ? (
            <ICUnDone
              className="text-cyan-800 w-6 cursor-pointer"
              onClick={onUpdate}
            />
          ) : (
            <ICDone
              className="text-gray-300 w-6 cursor-pointer"
              onClick={onUpdate}
            />
          )}
          <ICTrash
            className="text-red-600 w-6 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      </div>
      {todo && <Cards {...{ todo }} todoId={todo.id!} />}
    </div>
  );
};
