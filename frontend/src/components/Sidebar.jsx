import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const { chats, currentChat, setCurrentChatId, createChat } = useChat();
  const [newName, setNewName] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    createChat(newName.trim());
    setNewName("");
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="collapse-btn"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? "→" : "←"}
      </button>

      {!collapsed && (
        <>
          <h2>Chats</h2>
          <ul className="chat-list">
            {chats.map((c) => (
              <li
                key={c.id}
                className={c.id === currentChat?.id ? "active" : ""}
                onClick={() => setCurrentChatId(c.id)}
              >
                {c.name}
              </li>
            ))}
          </ul>
          <form className="new-chat-form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="New chat name…"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button type="submit">＋</button>
          </form>
        </>
      )}
    </div>
  );
}