import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Conversation } from "./Conversation";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Conversation, conversation => conversation.messages, { nullable: false })
  conversationId: Conversation;

  @ManyToOne(() => User, user => user.sentMessages, { nullable: false, eager: true })
  senderId: User;

  @Column()
  content: string;

  @CreateDateColumn()
  timestamp: Date;

  @CreateDateColumn()
  seenBy: User[];
}
