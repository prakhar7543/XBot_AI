import React, { useState } from "react";
import "./pastChats.css";

export default function PastConversation({ setActiveChat, savedChats }) {
  if (!Array.isArray(savedChats)) {
    savedChats = [];
  }

  return (
    <div className="pastConversationContainer">
      {savedChats &&
        savedChats.map((item, index) => (
          <div
            className="pastConversationCard"
            key={index}
            onClick={() => setActiveChat(item)}
            style={{ cursor: "pointer" }}
          >
            <p style={{ pointerEvents: "all", cursor: "pointer" }}>
              Past Conversations
            </p>
          </div>
        ))}
    </div>
  );
}
