import { ICPersonPlus, ICPersonMinus, ICComments } from "pcg-commons";
import { TUser, useUser } from "./hooks/use-user";
import { Messages } from "con-messages";

export const User = ({ user }: TUser) => {
  const { onFollow, userId, onMessagesToggle, isMessagesOpen, userFragment } =
    useUser({ user });

  if (userFragment?.id === userId) return null;
  return (
    <div className="w-full bg-cyan-100 p-3 rounded flex flex-col space-y-2">
      <div className=" flex items-center justify-between">
        <span className="text-gray-500"> {userFragment?.fullName}</span>
        <div className="flex items-center space-x-2">
          <ICComments
            className=" text-green-300 w-5 mx-auto cursor-pointer "
            onClick={onMessagesToggle}
          />
          {userFragment?.followers.includes(userId!) ? (
            <ICPersonMinus
              className="w-6 text-gray-500 cursor-pointer"
              onClick={() => onFollow()}
            />
          ) : (
            <ICPersonPlus
              className="w-6 text-cyan-500 cursor-pointer"
              onClick={() => onFollow()}
            />
          )}
        </div>
      </div>
      {isMessagesOpen && <Messages />}
    </div>
  );
};
