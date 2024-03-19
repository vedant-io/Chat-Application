import useGetMessages from "../../hooks/useGetMessages";
import MessageRender from "./MessageRender.jsx";
import MessageSkeleton from "../Skeletons/MessageSkeleton.jsx";
import { useEffect, useRef } from "react";
const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.message === "No conversation found" && (
        <p className="text-center">Start Your Conversations</p>
      )}
      {!loading &&
        messages.messages &&
        messages.messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <MessageRender message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>
  );
};

export default Messages;
