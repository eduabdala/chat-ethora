import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Conversation } from "./Conversation";

/**
 * Represents a message sent within a conversation.
 */
@Entity()
export class Message {
  /** Unique identifier (UUID) for the message */
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  /** The conversation to which this message belongs */
  @ManyToOne(() => Conversation, conversation => conversation.messages, { nullable: false })
  conversation!: Conversation;

  /** The user who sent the message */
  @ManyToOne(() => User, user => user.sentMessages, { nullable: false, eager: true })
  sender!: User;

  /** Content of the message */
  @Column()
  content!: string;

  /** Timestamp of when the message was created */
  @CreateDateColumn()
  timestamp!: Date;

  /**
   * Users who have seen this message
   * This is a many-to-many relationship
   */
  @ManyToMany(() => User)
  @JoinTable()
  seenBy!: User[];
}
