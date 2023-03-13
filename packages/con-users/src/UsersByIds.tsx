import { TUseUsersByIds, useUsersByIds } from "./hooks/use-users-by-ids";

export const UsersByIds = ({ ids }: TUseUsersByIds) => {
  const { data } = useUsersByIds({ ids });

  return (
    <div className=" w-1/3 self-end  flex flex-col  bg-white rounded py-1 px-2 ">
      {data.usersByIds.edges?.map((user) => (
        <div className="text-[10px] text-gray-700" key={user.node?.id}>
          {user.node?.fullName}
        </div>
      ))}
    </div>
  );
};
