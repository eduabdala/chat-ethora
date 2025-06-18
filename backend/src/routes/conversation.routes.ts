import { Router } from "express";
import {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation,
} from "../controllers/conversation.controller";

import messageRouter from "./message.routes";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Conversations
 *   description: 
 */

/**
 * @swagger
 * /conversations:
 *   get:
 *     summary: Lista todas as conversas
 *     tags: [Conversations]
 *     responses:
 *       200:
 *         description: Lista de conversas
 */
router.get("/", getAllConversations);

/**
 * @swagger
 * /conversations/{conversationId}:
 *   get:
 *     summary: Retorna uma conversa específica pelo ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da conversa
 *     responses:
 *       200:
 *         description: Detalhes da conversa
 *       404:
 *         description: Conversa não encontrada
 */
router.get("/:conversationId", getConversationById);

/**
 * @swagger
 * /conversations:
 *   post:
 *     summary: Cria uma nova conversa
 *     tags: [Conversations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - participantIds
 *             properties:
 *               participantIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Lista de IDs dos usuários participantes
 *     responses:
 *       201:
 *         description: Conversa criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", createConversation);

/**
 * @swagger
 * /conversations/{conversationId}:
 *   put:
 *     summary: Atualiza uma conversa existente
 *     tags: [Conversations]
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
 *             properties:
 *               title:
 *                 type: string
 *               participantIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Conversa atualizada
 *       404:
 *         description: Conversa não encontrada
 */
router.put("/:conversationId", updateConversation);

/**
 * @swagger
 * /conversations/{conversationId}:
 *   delete:
 *     summary: Remove uma conversa
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da conversa
 *     responses:
 *       204:
 *         description: Conversa deletada
 *       404:
 *         description: Conversa não encontrada
 */
router.delete("/:conversationId", deleteConversation);

// Anexando rotas de mensagens
router.use("/:conversationId/messages", messageRouter);

export default router;
