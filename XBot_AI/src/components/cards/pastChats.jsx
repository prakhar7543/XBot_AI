import { useNavigate } from "react-router-dom";
import './pastChats.css';

export default function PastConversation({ savedChats }) {
  const navigate = useNavigate();

  const handleClick = (index) => {
    // 👇 Just pass index in navigation
    navigate("/history", { state: { index } });
  };

  return (
    <div className="pastConversationContainer">
      {savedChats &&
        savedChats.map((item, index) => (
          <div
            className="pastConversationCard"
            key={index}
            onClick={() => handleClick(index)}
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
