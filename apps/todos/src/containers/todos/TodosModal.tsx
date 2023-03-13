import { Modal } from "components";
import { TUseTodosModal, useTodosModal } from "./hooks";

export const TodosModal = ({ onClose }: TUseTodosModal) => {
  const { onSubmit } = useTodosModal({ onClose });
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
          className=" mb-4 p-4 rounded bg-gray-800 text-white text-center w-full"
        >
          Save Todo
        </button>
      </form>
    </Modal>
  );
};
