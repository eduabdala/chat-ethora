// src/App.jsx
import React, { useState } from "react";
import Login    from "./components/Login";
import Signup   from "./components/Signup";
import { ChatProvider } from "./context/ChatContext";
import Sidebar      from "./components/Sidebar";
import ChatWindow   from "./components/ChatWindow";

function App() {
  const [user, setUser] = useState(null);
  const [authView, setAuthView] = useState("login");

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignup = (userData) => {
    setUser(userData);
  };

  return (
    <ChatProvider>
      {user ? (
        // logged in → show chat
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <ChatWindow />
        </div>
      ) : authView === "login" ? (
        // not logged in → show Login form
        <Login
          onLogin={handleLogin}
          onSwitch={() => setAuthView("signup")}
        />
      ) : (
        // not logged in & signup selected → show Signup form
        <Signup
          onSignup={handleSignup}
          onSwitch={() => setAuthView("login")}
        />
      )}
    </ChatProvider>
  );
}

export default App;
