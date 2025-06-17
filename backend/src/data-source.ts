import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Conversation } from "./entities/Conversation";
import { Message } from "./entities/Message";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // ❗ Em produção: use migrações
  logging: false,
  entities: [User, Conversation, Message],
  migrations: [],
  subscribers: [],
});
