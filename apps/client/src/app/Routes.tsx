import Authentication from "pages/authentication/Authentication";
import Todo from "pages/todo/Todo";
import { authAtom } from "pcg-commons";
import { ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes as Router,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import Chat from "pages/chat/Chat";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useRecoilValue(authAtom);

  if (user) return <>{children}</>;
  return <Navigate to="/auth" />;
};

export const Routes = () => {
  return (
    <Router>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
      <Route path="/auth" element={<Authentication />} />
    </Router>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className="bg-slate-900 text-white p-4">
        <NavLink to="/chat" className="text-xl">
          Chat
        </NavLink>
      </header>
      <Routes />
    </BrowserRouter>
  );
};
