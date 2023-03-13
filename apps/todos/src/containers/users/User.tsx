import { Messages } from "containers/messages/Messages";
import { ICComments } from "icons/ICComments";
import { ICPersonMinus } from "icons/ICPersonMinus";
import { ICPersonPlus } from "icons/ICPersonPlus";
import { TUser, useUser } from "./hooks/use-user";

export const User = ({ user }: { user: TUser }) => {
  const { onFollow, userId, onMessagesToggle, isMessagesOpen } = useUser();

  if (user?.id === userId) return null;
  return (
    <div className="w-full bg-cyan-100 p-3 rounded flex flex-col space-y-2">
      <div className=" flex items-center justify-between">
        <span className="text-gray-500"> {user?.fullName}</span>
        <div className="flex items-center space-x-2">
          <ICComments
            className=" text-green-300 w-5 mx-auto cursor-pointer "
            onClick={onMessagesToggle}
          />
          {user?.followers.includes(userId!) ? (
            <ICPersonMinus
              className="w-6 text-gray-500 cursor-pointer"
              onClick={() => onFollow(user)}
            />
          ) : (
            <ICPersonPlus
              className="w-6 text-cyan-500 cursor-pointer"
              onClick={() => onFollow(user)}
            />
          )}
        </div>
      </div>

      {isMessagesOpen && <Messages />}
    </div>
  );
};
