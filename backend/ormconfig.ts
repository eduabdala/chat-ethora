import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./src/entities/User";
import { Conversation } from "./src/entities/Conversation";
import { Message } from "./src/entities/Message";
import * as dotenv from "dotenv";

dotenv.config({ path: "/.env" });

const isUsingUrl = Boolean(process.env.DATABASE_URL);

export const AppDataSource = new DataSource({
  type: "postgres",
  ...(isUsingUrl
    ? { url: process.env.DATABASE_URL }
    : {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER || "user",
        password: process.env.DB_PASS || "password",
        database: process.env.DB_NAME || "database",
      }),
  entities: [User, Conversation, Message],
  migrations: ["/src/migrations/*.ts"],
  synchronize: false,
});
