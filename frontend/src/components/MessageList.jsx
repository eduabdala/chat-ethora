import React, { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
  const listRef = useRef();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={listRef} className="message-list">
      {messages.map((m, i) => (
        <div key={i} className="message-item">
          {m.text}
        </div>
      ))}
    </div>
  );
}