// backend/src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Conversation } from "./entities/Conversation";
import { Message } from "./entities/Message";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [User, Conversation, Message],
  migrations: ["/migrations/*.ts"],
});
