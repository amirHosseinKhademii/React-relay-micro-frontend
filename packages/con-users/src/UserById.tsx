import { TUserById, useUserById } from "./hooks";

export const UserById = ({ user }: TUserById) => {
  const { userByIdFragment } = useUserById({ user });
  return (
    <div className="text-[10px] text-gray-700">
      {userByIdFragment?.fullName}
    </div>
  );
};
