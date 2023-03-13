import { RelayEnvironmentProvider } from "react-relay";
import { RecoilRoot } from "recoil";
import { environment } from "relay";
import { AppRouter } from "./Routes";

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </RelayEnvironmentProvider>
  );
}
