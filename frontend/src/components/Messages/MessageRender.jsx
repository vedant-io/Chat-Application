/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/extractTime.js";
import useConversation from "../../zustand/useConversation";

const MessageRender = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  // Determine if the message is from the current user or the other user
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`} key={message._id}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-3`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-black">
        {formattedTime}
      </div>
    </div>
  );
};

export default MessageRender;
