import express from "express";
import {
  getMessagesByConversation,
  sendMessage,
  markMessageAsSeen,
} from "../controllers/message.controller";

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /api/conversations/{conversationId}/messages:
 *   get:
 *     summary: Lista todas as mensagens de uma conversa
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da conversa
 *     responses:
 *       200:
 *         description: Lista de mensagens da conversa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *   post:
 *     summary: Envia uma nova mensagem em uma conversa
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da conversa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderId
 *               - content
 *             properties:
 *               senderId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mensagem enviada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Dados inválidos
 */
router.get("/", getMessagesByConversation);

router.post("/", (req, res) => {
  req.body.conversationId = req.params.conversationId;
  sendMessage(req, res);
});

/**
 * @swagger
 * /api/conversations/{conversationId}/messages/seen:
 *   post:
 *     summary: Marca uma mensagem como visualizada
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da conversa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - messageId
 *               - userId
 *             properties:
 *               messageId:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mensagem marcada como visualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       404:
 *         description: Mensagem não encontrada
 */
router.post("/seen", markMessageAsSeen);

export default router;
