import { Request, Response } from "express";
import { Message } from "../entities/Message";

// Banco simulado em memória
let messages: Message[] = [];

export const getMessagesByConversation = (req: Request, res: Response) => {
  const { conversationId } = req.params;
  const convMessages = messages.filter(m => m.id === conversationId);
  res.json(convMessages);
};

export const sendMessage = (req: Request, res: Response) => {
  const { conversationId, senderId, content } = req.body;

  if (!conversationId || !senderId || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newMessage: Message = {
    id: Date.now().toString(),
    conversationId,
    senderId,
    content,
    timestamp: new Date(),
    seenBy: [senderId],
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
};

export const markMessageAsSeen = (req: Request, res: Response) => {
  const { messageId, userId } = req.body;

  const msg = messages.find(m => m.id === messageId);
  if (!msg) return res.status(404).json({ error: "Message not found" });

  if (!msg.seenBy.includes(userId)) {
    msg.seenBy.push(userId);
  }

  res.json(msg);
};
