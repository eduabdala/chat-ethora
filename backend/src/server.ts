import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import conversationRoutes from "./routes/conversation.routes";
import messageRoutes from "./routes/message.routes";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Chat",
      version: "1.0.0",
      description: "Documentação da API do projeto Chat",
    },
    servers: 
    {
      url: "http://localhost:3001/api/",
    },
  },
  apis: ["./src/routes/*.ts"], // aponta para os arquivos com as rotas comentadas
});

app.use(express.json());

// Registra as rotas da API
app.use("/users", userRoutes);
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);

// Registra a rota do Swagger para documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3001;

// Inicializa o banco e depois inicia o servidor HTTP (com Socket.IO)
AppDataSource.initialize().then(() => {
  console.log("✅ Database connected");

  server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📚 Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}).catch((err) => {
  console.error("❌ Error connecting to database", err);
});
