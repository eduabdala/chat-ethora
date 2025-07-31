import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors"; // <-- AQUI
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

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const io = new Server(server, { cors: { origin: "*" } });

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Chat",
      version: "1.0.0",
      description: "Documentação da API do projeto Chat",
    },
    servers: {
      url: "http://localhost:3001/api/",
    },
  },
  apis: ["./src/routes/*.ts"],
});

app.use(express.json());

app.use("/users", userRoutes);
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3001;

AppDataSource.initialize().then(() => {
  console.log("✅ Database connected");

  server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📚 Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}).catch((err) => {
  console.error("❌ Error connecting to database", err);
});
