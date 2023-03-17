import { TUseUsersByIds, useUsersByIds } from "./hooks/use-users-by-ids";
import { UserById } from "./UserById";

export const UsersByIds = ({ ids }: TUseUsersByIds) => {
  const { data } = useUsersByIds({ ids });

  return (
    <div className=" w-1/3 self-end  flex flex-col  bg-white rounded py-1 px-2 ">
      {data.usersByIds.edges?.map((user) => (
        <UserById key={user.cursor} {...{ user }} />
      ))}
    </div>
  );
};
