import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';
import '../styles/ChatWindow.css';

const ChatWindow = () => (
  <div className="chat-window">
    <MessageList />
    <MessageInput />
  </div>
);

export default ChatWindow;