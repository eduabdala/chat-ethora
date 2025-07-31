import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
  } from "typeorm";
  import { User } from "./User";
  import { Conversation } from "./Conversation";
  
  /**
   * Represents a participant in a conversation.
   * This acts as a join table with metadata (e.g., participantType, joinedAt).
   */
  @Entity()
  @Unique(["user", "conversation"])
  export class Participant {
    /** Unique identifier for the participant entry */
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    /** The user participating in the conversation */
    @ManyToOne(() => User, user => user.participantEntries, { onDelete: "CASCADE" })
    user!: User;
  
    /** The conversation the user is part of */
    @ManyToOne(() => Conversation, conversation => conversation.participants, { onDelete: "CASCADE" })
    conversation!: Conversation;
  
    /** Type of the participant (e.g., 'admin', 'member') */
    @Column()
    participantType!: string;
  
    /** Timestamp when the user joined the conversation */
    @CreateDateColumn()
    joinedAt!: Date;
  
    /** Timestamp of last update to participant data */
    @UpdateDateColumn()
    updatedAt!: Date;
  }
  