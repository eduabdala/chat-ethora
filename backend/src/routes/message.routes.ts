import express from "express";
import {
  getMessagesByConversation,
  sendMessage,
  markMessageAsSeen,
} from "../controllers/message.controller";

const router = express.Router({ mergeParams: true });

router.get("/", getMessagesByConversation);
router.post("/", (req, res) => {
  req.body.conversationId = req.params.conversationId;
  sendMessage(req, res);
});
router.post("/seen", markMessageAsSeen);

export default router;
