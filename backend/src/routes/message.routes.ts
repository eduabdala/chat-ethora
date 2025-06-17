import express from "express";
import {
  getMessagesByConversation,
  sendMessage,
  markMessageAsSeen,
} from "../controllers/message.controller";

const router = express.Router({ mergeParams: true }); // importante para pegar params do pai

// GET /api/conversations/:conversationId/messages
router.get("/", getMessagesByConversation);

// POST /api/conversations/:conversationId/messages
router.post("/", (req, res) => {
  // Passa o conversationId da URL para o body, para usar no controller
  req.body.conversationId = req.params.conversationId;
  sendMessage(req, res);
});

// POST /api/conversations/:conversationId/messages/seen
router.post("/seen", markMessageAsSeen);

export default router;
