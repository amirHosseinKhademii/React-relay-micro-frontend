import { ReactNode } from "react";

export const TodosCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-600 antialiased w-full col-span-1  "
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
