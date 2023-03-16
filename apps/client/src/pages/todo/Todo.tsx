import { Todos } from "con-todos";

import { Suspense } from "react";

const Todo = () => {
  return (
    <div className="bg-slate-900 antialiased h-screen p-8 lg:px-[500px]">
      <Suspense fallback="Loading Todos ...">
        <Todos />
      </Suspense>
    </div>
  );
};

export default Todo;
