import { ReactNode } from "react";

export const DateText = ({ children }: { children: ReactNode }) => {
  return <span className="text-[8px] text-blue-600">{children}</span>;
};
