import { Users } from "containers/users/Users";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="bg-slate-900 antialiased h-screen p-8 grid grid-cols-2 gap-x-4">
      <Suspense fallback="Loading Users ...">
        <Users />
      </Suspense>
      <Suspense fallback="Loading Users ...">
        <Users />
      </Suspense>
    </div>
  );
};

export default Home;
