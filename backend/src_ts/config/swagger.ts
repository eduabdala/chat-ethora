// src/config/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat Ethora API",
      version: "1.0.0",
      description: "Documentação das rotas do backend do Chat Ethora",
    },
    servers: [
      {
        url: "http://localhost:3001/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // caminhos onde estão suas rotas
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
