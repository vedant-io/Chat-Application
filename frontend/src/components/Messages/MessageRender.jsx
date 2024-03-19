/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation";

const MessageRender = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
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
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
    </div>
  );
};

export default MessageRender;
