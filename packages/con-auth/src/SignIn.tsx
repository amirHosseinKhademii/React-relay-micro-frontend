import { Modal } from "pcg-commons";
import { SignInForm } from "./components";
import { useSignIn } from "./hooks";

export const SignIn = () => {
  const { onSubmit } = useSignIn();

  return (
    <Modal>
      <SignInForm {...{ onSubmit }} />
    </Modal>
  );
};
