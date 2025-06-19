import { useChat } from '../hooks/useChat';

const MessageList = () => {
  const { messages } = useChat();
  return (
    <ul className="message-list">
      {messages.map((msg) => (
        <li key={msg.id} className={`message ${msg.sender}`}>
          {msg.text}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;