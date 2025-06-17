import { Request, Response } from "express";
import { Conversation } from "../entities/Conversation";

// Banco simulado
let conversations: Conversation[] = [];

export const getAllConversations = (req: Request, res: Response) => {
  res.json(conversations);
};

export const getConversationById = (req: Request, res: Response) => {
  const conversation = conversations.find(c => c.id === req.params.id);
  conversation
    ? res.json(conversation)
    : res.status(404).json({ error: "Conversation not found" });
};

export const createConversation = (req: Request, res: Response) => {
  const { isGroup, name, participants } = req.body;

  if (!Array.isArray(participants) || participants.length < 2) {
    return res
      .status(400)
      .json({ error: "At least two participants are required." });
  }

  const newConversation: Conversation = {
    id: Date.now().toString(),
    isGroup,
    name: isGroup ? name : undefined,
    participants,
    createdAt: new Date(),
  };

  conversations.push(newConversation);
  res.status(201).json(newConversation);
};

export const deleteConversation = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = conversations.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Conversation not found" });
  }

  const removed = conversations.splice(index, 1)[0];
  res.json({ message: "Conversation deleted", conversation: removed });
};

export const updateConversation = async (req: Request, res: Response) => {
  // lógica de update aqui
};
