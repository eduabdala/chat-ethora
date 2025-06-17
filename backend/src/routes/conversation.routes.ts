import express from "express";
import {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation,
} from "../controllers/conversation.controller";

import messageRouter from "./message.routes";

const router = express.Router();

router.get("/", getAllConversations);
router.get("/:conversationId", getConversationById);
router.post("/", createConversation);
router.put("/:conversationId", updateConversation);
router.delete("/:conversationId", deleteConversation);
router.use("/:conversationId/messages", messageRouter);

export default router;
