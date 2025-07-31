import { Request, Response } from "express";
import { Conversation } from "../entities/Conversation";

// Banco simulado
let conversations: Conversation[] = [];

export const getAllConversations = (req: Request, res: Response) => {
  res.json(conversations);
};

export const getConversationById = (req: Request, res: Response) => {
  const conversation = conversations.find(c => c.id === req.params.conversationId);
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
    messages: []
  };

  conversations.push(newConversation);
  res.status(201).json(newConversation);
};

export const deleteConversation = (req: Request, res: Response) => {
  const { conversationId } = req.params;
  const index = conversations.findIndex(c => c.id === conversationId);
  if (index === -1) {
    return res.status(404).json({ error: "Conversation not found" });
  }

  const removed = conversations.splice(index, 1)[0];
  res.json({ message: "Conversation deleted", conversation: removed });
};


export const updateConversation = (req: Request, res: Response) => {
  const { conversationId } = req.params;
  const { name, participants } = req.body;

  const conversation = conversations.find(c => c.id === conversationId);

  if (!conversation) {
    return res.status(404).json({ error: "Conversation not found" });
  }

  if (!conversation.isGroup) {
    return res.status(400).json({ error: "Only group conversations can be updated" });
  }

  if (name !== undefined) {
    conversation.name = name;
  }

  if (participants && Array.isArray(participants)) {
    // Evita duplicações e mantém apenas valores únicos
    const currentSet = new Set(conversation.participants);
    for (const userId of participants) {
      currentSet.add(userId);
    }
    conversation.participants = Array.from(currentSet);
  }

  res.json({ message: "Conversation updated", conversation });
};

