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
import { Participant } from "./Participant";

/**
 * Represents a user in the system.
 * Each user can participate in multiple conversations and send multiple messages.
 */
@Entity()
export class User {
  /** Unique identifier (UUID) for the user */
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  /** Name of the user */
  @Column()
  name!: string;

  /** Email address (must be unique) */
  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  password!: string;

  /** Optional URL to the user's profile photo */
  @Column({ nullable: true })
  profilePhoto?: string;

  /** Optional biography of the user */
  @Column({ nullable: true })
  bio?: string;

  @OneToMany(() => Participant, participant => participant.user)
  participantEntries!: Participant[];

  /** Conversations in which the user participates (many-to-many) */
  @ManyToMany(() => Conversation, conversation => conversation.participants)
  conversations!: Conversation[];

  /** Messages sent by this user (one-to-many) */
  @OneToMany(() => Message, message => message.sender)
  sentMessages!: Message[];

  /** Timestamp of when the user was created */
  @CreateDateColumn()
  createdAt!: Date;

  /** Timestamp of the last user update */
  @UpdateDateColumn()
  updatedAt!: Date;
}
