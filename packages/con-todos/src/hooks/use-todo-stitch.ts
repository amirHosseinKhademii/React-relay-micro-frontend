import { useFragment } from "react-relay";
import { FragmentRefs } from "relay-runtime";
import { TodosStitchTodoBaseFragment } from "../graphql/TodosStitch.queries";
import { TodosStitchTodoBaseFragment$key } from "../graphql/__generated__/TodosStitchTodoBaseFragment.graphql";

export type TTodoNodeBase = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"CardsStitchFragment" | string>;
  } | null;
};

export type TTodoStitch<T extends TTodoNodeBase> = {
  todo: T;
};

export const useTodoStitch = <T extends TTodoNodeBase>({
  todo,
}: TTodoStitch<T>) => {
  const todoStitchFragment = useFragment<TodosStitchTodoBaseFragment$key>(
    TodosStitchTodoBaseFragment,
    todo.node
  );

  return {
    todo: todoStitchFragment,
  };
};
