import React, { useState } from 'react';
import { ChatProvider } from './context/ChatContext';
import ChatWindow from './components/ChatWindow.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [authView, setAuthView] = useState('login');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignup = (userData) => {
    setUser(userData);
  };

  return (
    <ChatProvider>
      {user ? (
        <ChatWindow />
      ) : authView === 'login' ? (
        <Login onLogin={handleLogin} onSwitch={() => setAuthView('signup')} />
      ) : (
        <Signup onSignup={handleSignup} onSwitch={() => setAuthView('login')} />
      )}
    </ChatProvider>
  );
}

export default App;