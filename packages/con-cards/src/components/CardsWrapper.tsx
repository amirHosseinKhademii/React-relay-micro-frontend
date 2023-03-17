import { ICPlus } from "pcg-commons";
import { ReactNode } from "react";

export const CardsWrapper = ({
  onOpen,
  children,
}: {
  onOpen: (e: any) => void;
  children: ReactNode;
}) => {
  return (
    <div>
      <ICPlus
        className=" mb-2 p-2 w-11 text-gray-600 ml-auto cursor-pointer "
        onClick={onOpen}
      />

      <ul
        className="rounded p-2  flex flex-col space-y-2 "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ul>
    </div>
  );
};
