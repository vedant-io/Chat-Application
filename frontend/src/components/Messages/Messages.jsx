import useGetMessages from "../../hooks/useGetMessages";
import MessageRender from "./MessageRender.jsx";
import MessageSkeleton from "../Skeletons/MessageSkeleton.jsx";
const Messages = () => {
  const { messages, loading } = useGetMessages();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.message === "No conversation found" && (
        <p className="text-center">Start Your Conversations</p>
      )}
      {!loading &&
        messages.messages &&
        messages.messages.map(
          (
            message,
            index, // Add index as the second parameter
          ) => (
            <MessageRender key={message._id || index} message={message} /> // Use message._id as the key if available, otherwise use index
          ),
        )}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>
  );
};

export default Messages;
