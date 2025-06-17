import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Message } from "./Message";
import { Conversation } from "./Conversation";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  photoUrl?: string;

  @Column({ nullable: true })
  bio?: string;

  @ManyToMany(() => Conversation, conversation => conversation.participants)
  conversations: Conversation[];

  @OneToMany(() => Message, message => message.sender)
  sentMessages: Message[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
