import { ReactNode } from "react";

export const Modal = ({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose?: () => void;
}) => {
  return (
    <div
      className="z-0 fixed top-0 left-0 h-full w-full flex  justify-center py-40 bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 z-50 w-10/12 md:w-1/2 h-fit opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-lg text-gray-800">{children}</div>
      </div>
    </div>
  );
};
