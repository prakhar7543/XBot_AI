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



/*
// import { useNavigate } from "react-router-dom";
import "./pastChats.css";

export default function PastConversation({ savedChats }) {
  // const navigate = useNavigate();

  // const handleClick = (index) => {
  //   // 👇 Just pass index in navigation
  //   navigate("/history", { state: { index } });
  // };

  return (
    <div className="pastConversationContainer">
      <a href="/history" style={{ textDecoration: "none" }}>
  <div className="pastConversationCard" style={{ cursor: "pointer" }}>
    <p>Past Conversations</p>
  </div>
</a>

      {savedChats &&
        savedChats.map((item, index) => (
          <a
            key={index}
            href={`/history?index=${index}`}
            data-testid={`past-chat-${index}`}
            style={{ textDecoration: "none" }}
          >
            <div className="pastConversationCard" style={{ cursor: "pointer" }}>
              <p>Past Conversations</p>
            </div>
          </a>

         
        ))} 
    </div>
  );
}
*/