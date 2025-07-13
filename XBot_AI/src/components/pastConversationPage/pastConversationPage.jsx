// src/components/pastConversationsPage.jsx
import React, { useState, useEffect } from "react";
import PastConversation from "../cards/pastChats";

export default function PastConversationPage() {
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chatData")) || [];
    setSavedChats(data);
  }, []);

  return (
    <div>
      <h2 style={{ paddingLeft: "20px", paddingTop: "10px" }}>Past Conversations</h2>
      <PastConversation savedChats={savedChats} setActiveChat={() => {}} />
    </div>
  );
}
