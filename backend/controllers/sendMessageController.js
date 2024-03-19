import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [receiverId, senderId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [receiverId, senderId],
      });
    }

    const messages = new Message({
      senderId,
      receiverId,
      message,
    });

    if (messages) {
      conversation.messages.push(messages._id);
    }

    await Promise.all([messages.save(), conversation.save()]);
    res.status(201).json({ messages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [receiverId, senderId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(404).json({ message: "No conversation found" });
    }
    res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    console.error(error);
  }
};
