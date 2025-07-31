import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Message } from "./Message";
import { Participant } from "./Participant";

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
  conversationType!: boolean;

  /** Optional name for the conversation (mainly for groups) */
  @Column({ nullable: true })
  name?: string;

  /** Optional profile photo for the conversation */
  @Column({ nullable: true })
  conversationPhoto?: string;

  /**
   * Participants in this conversation (one-to-many with Participant)
   */
  @OneToMany(() => Participant, participant => participant.conversation)
  participants!: Participant[];

  /**
   * Messages that belong to this conversation
   */
  @OneToMany(() => Message, message => message.conversation)
  messages!: Message[];

  /** Timestamp of when the conversation was created */
  @CreateDateColumn()
  createdAt!: Date;
}
