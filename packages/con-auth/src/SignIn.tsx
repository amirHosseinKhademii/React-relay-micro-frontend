import { Modal } from "pcg-commons";
import { useSignIn } from "./hooks";

export const SignIn = () => {
  const { onSubmit } = useSignIn();

  return (
    <Modal>
      <form className="w-full flex flex-col space-y-8 mt-4" {...{ onSubmit }}>
        <input
          type="text"
          placeholder="Username"
          name="userName"
          className="w-full h-14 rounded border border-gray-300 px-4"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full h-14 rounded border border-gray-300 px-4"
          required
        />
        <button
          type="submit"
          className=" mb-4 p-4 rounded bg-gray-600 text-white text-center w-full"
        >
          Sign in
        </button>
      </form>
    </Modal>
  );
};
