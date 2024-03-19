import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.example/index.js";
import useConversation from "../zustand/useConversation.js";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket?.off("message");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
