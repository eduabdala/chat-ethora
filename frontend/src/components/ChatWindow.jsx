import React from "react";
import { useChat } from "../context/ChatContext";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "../styles/ChatWindow.css";

export default function ChatWindow() {
  const { currentChat, postMessage } = useChat();

  if (!currentChat) {
    return <div className="chat-window">Select or create a chat to begin.</div>;
  }

  return (
    <div className="chat-window">
      <header className="chat-header">{currentChat.name}</header>
      <MessageList messages={currentChat.messages} />
      <MessageInput onSend={postMessage} />
    </div>
  );
}