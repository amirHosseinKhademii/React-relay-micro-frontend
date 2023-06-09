import { Users } from "con-users";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="bg-slate-900 antialiased h-screen p-8 ">
      <Suspense fallback="Loading Users ...">
        <Users />
      </Suspense>
    </div>
  );
};

export default Home;
