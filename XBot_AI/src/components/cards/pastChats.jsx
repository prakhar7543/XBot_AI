// src/components/cards/pastChats.jsx
import "./pastChats.css";

export default function PastConversation() {
  return (
    <div className="pastConversationContainer">
      <a
        href="/history"
        data-testid="past-chat-history-link"
        style={{ textDecoration: "none" }}
      >
        <div className="pastConversationCard" style={{ cursor: "pointer" }}>
          <p>Past Conversations</p>
        </div>
      </a>
    </div>
  );
}



