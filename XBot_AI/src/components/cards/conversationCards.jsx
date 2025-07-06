import React, { useEffect, useRef } from "react";
import "./conversationCards.css";
import userPic from "../../assets/userPic.png";
// import sideNavbarImg from "../../assets/sideNavbarImg.png";
import thumbsUp from "../../assets/thumbsUp.png";
import thumbsDown from "../../assets/thumbsDown.png";
import soulAi from '../../assets/soulAi.png';

export default function Conversation({ time, chat }) {
  let endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="conversationContainer">
      {chat.map((msg, index) => (
        <div key={index} className="conversationCard">
          <div className="profilePic" >
            <img
              src={msg.sender === "You" ? userPic : soulAi}
              alt="profile"
            />
          </div>

          <div className="chat">
            <div style={{ paddingTop: "10px" }}>
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                {msg.sender}
              </p>
              <p>{msg.text}</p>
            </div>
            <div className="timeThumbs">
              <p style={{ color: "#0000009E", paddingBottom: "5px" }}>
                {msg.time}
              </p>
              {msg.sender !== "You" && (
                <div
                  className="thumbsUp"
                  style={{ height: "16px", width: "43px" }}
                >
                  <img
                    src={thumbsUp}
                    alt="up"
                    style={{ pointerEvents: "all" }}
                  />
                  <img
                    src={thumbsDown}
                    alt="down"
                    style={{ pointerEvents: "all" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div ref={endRef}></div>
    </div>
  );
}
