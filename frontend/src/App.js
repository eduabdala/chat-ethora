import React, { useState } from 'react';
import { ChatProvider } from './context/ChatContext';
import ChatWindow from './components/ChatWindow.jsx';
import Login from './components/Login.jsx';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <ChatProvider>
      {user ? <ChatWindow /> : <Login onLogin={handleLogin} />}
    </ChatProvider>
  );
}

export default App;