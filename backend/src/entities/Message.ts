import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Conversation } from "./Conversation";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Conversation, conversation => conversation.messages, { nullable: false })
  conversation: Conversation;

  @ManyToOne(() => User, user => user.sentMessages, { nullable: false, eager: true })
  sender: User;

  @Column()
  content: string;

  @CreateDateColumn()
  timestamp: Date;
}
