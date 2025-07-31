import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Message } from "./Message";

/**
 * Represents when a user read a specific message.
 */
@Entity()
export class MessageReadStatus {
  /** Unique identifier */
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  /** The message that was read */
  @ManyToOne(() => Message, { nullable: false, onDelete: 'CASCADE' })
  message!: Message;

  /** The user who read the message */
  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  user!: User;

  /** Timestamp of when the message was read */
  @CreateDateColumn()
  readAt!: Date;
}
