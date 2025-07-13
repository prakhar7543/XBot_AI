import React, { useState } from "react";
import "./inputBar.css";

export default function InputBar({
  setOpenChat,
  time,
  setTime,
  chat,
  setChat,
  dummyData,
  feedback,
  rating,
  feedbackOpinion,
  setSavedChats,
}) {
  let [text, setText] = useState("");

  function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
    return formattedTime;
  }

  let handleChange = (e) => {
    let value = e.target.value;
    setText(value);
  };

  let handleOpenChat = () => {
    if (text.trim()) {
      let time = getCurrentTime();
      setTime(time);
      setOpenChat(true);

      let updated = [...chat, { sender: "You", text: text.trim(), time: time }];

      let found = dummyData.find((item) => {
        return text.toLowerCase().includes(item.question.toLowerCase());
      });

      if (found) {
        updated.push({ sender: "Soul AI", text: found.response, time: time });
      } else {
        updated.push({
          sender: "Soul AI",
          text: "Sorry, Did not understand your query!",
          time: time,
        });
      }

      setChat(updated);
      
       setTimeout(() => {
      setText("");
    }, 100); // 100ms is enough to avoid the race condition
  
    }


  };

  let handleSave = () => {
    let data = {
      chat,
      time,
      feedback,
      rating,
      feedbackOpinion,
    };

    let existing = [];

    try {
      let saved = JSON.parse(localStorage.getItem("chatData"));
      if (Array.isArray(saved)) {
        existing = saved;
      }
    } catch (error) {
      console.error("Error parsing chatData from localStorage", error);
    }

    existing.push(data);
    localStorage.setItem("chatData", JSON.stringify(existing));
    setSavedChats(existing);
    alert("Data saved to localStorage!");
  };

  return (
    <div className="inpContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOpenChat();
        }}
        style={{display: 'flex'}}
      >
        <input
  data-testid="chat-input"
  type="text"
  placeholder="Message Bot AI..."
  value={text}
  onChange={handleChange}
/>

        <div className="btn">
          <button type="submit" data-testid="submit-button">Ask</button>

          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
