import { Modal } from "pcg-commons";
import { TUseCommentModal, useCommentsModal } from "../hooks";

export const CommentModal = ({ onClose, __id, cardId }: TUseCommentModal) => {
  const { onSubmit } = useCommentsModal({ onClose, __id, cardId });
  return (
    <Modal {...{ onClose }}>
      <form className="w-full flex flex-col space-y-8 mt-4" {...{ onSubmit }}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="w-full h-14 rounded border border-gray-300 px-4"
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          className="w-full h-14 rounded border border-gray-300 px-4"
        />
        <button
          type="submit"
          className=" mb-4 p-4 rounded bg-gray-600 text-white text-center w-full"
        >
          Save Comment
        </button>
      </form>
    </Modal>
  );
};
