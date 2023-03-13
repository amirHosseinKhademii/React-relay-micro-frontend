import { useMutation } from "react-relay";
import { AuthSignInMutation } from "../graphql/Auth.mutations";
import { AuthSignInMutation as TAuthSignInMutation } from "../graphql/__generated__/AuthSignInMutation.graphql";
import { useSetRecoilState } from "recoil";
import { authAtom } from "pcg-commons";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const [signIn] = useMutation<TAuthSignInMutation>(AuthSignInMutation);
  const setAuth = useSetRecoilState(authAtom);
  const navigate = useNavigate();

  return {
    onSubmit: async (e: any) => {
      e.preventDefault();
      const userName: string = e.target.userName.value;
      const password: string = e.target.password.value;
      signIn({
        variables: {
          userName,
          password,
        },
        onCompleted: (data) => {
          const user = { user: data.signIn.user.id, token: data.signIn.token };
          setAuth(user);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        },
      });
    },
  };
};
