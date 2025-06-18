import React from 'react';

const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = React.useState([]);

  const sendMessage = (text) => {
    const newMsg = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, newMsg]);
    // TODO: forward to backend or bot logic
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;