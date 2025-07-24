import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([
    { id: 1, name: "General", messages: [] },
  ]);
  const [currentChatId, setCurrentChatId] = useState(1);

  const createChat = (name) => {
    const newId = Date.now();
    setChats((cs) => [...cs, { id: newId, name, messages: [] }]);
    setCurrentChatId(newId);
  };

  const postMessage = (text) => {
    setChats((cs) =>
      cs.map((c) =>
        c.id === currentChatId
          ? { ...c, messages: [...c.messages, { text, ts: Date.now() }] }
          : c
      )
    );
  };

  const value = {
    chats,
    currentChat: chats.find((c) => c.id === currentChatId),
    setCurrentChatId,
    createChat,
    postMessage,
  };

  return (
    <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
  );
}

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be inside ChatProvider");
  return ctx;
};
