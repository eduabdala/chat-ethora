import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Message } from "./Message";

/**
 * Represents a chat conversation, which can be a group or private chat.
 */
@Entity()
export class Conversation {
  /** Unique identifier (UUID) for the conversation */
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  /** Whether the conversation is a group chat */
  @Column()
  isGroup!: boolean;

  /** Optional name for the conversation (mainly for groups) */
  @Column({ nullable: true })
  name?: string;

  /**
   * Users participating in this conversation
   * Many-to-many relationship with User
   */
  @ManyToMany(() => User, user => user.conversations)
  @JoinTable()
  participants!: User[];

  /**
   * Messages that belong to this conversation
   * One-to-many relationship
   */
  @OneToMany(() => Message, message => message.conversation)
  messages!: Message[];

  /** Timestamp of when the conversation was created */
  @CreateDateColumn()
  createdAt!: Date;
}
