import { useMessages } from "./hooks";

export const Messages = () => {
  const { data } = useMessages("12345");

  return (
    <div className="w-full flex flex-col space-y-2">
      <div>
        {data?.messages?.edges?.map((message) => (
          <div className="text-[10px]" key={message.node?.id}>
            {message.node?.body}
          </div>
        ))}
      </div>
      <form className="flex items-center space-x-2">
        <textarea className="h-8 rounded w-full px-2 pt-1" />
        <button className="bg-cyan-500 text-white rounded px-2 py-1">
          Send
        </button>
      </form>
    </div>
  );
};
