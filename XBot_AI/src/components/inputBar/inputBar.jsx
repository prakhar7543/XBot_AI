import React, { useState } from "react";
import "./inputBar.css";

export default function InputBar({
  setOpenChat,
  setTime,
  chat,
  setChat,
  dummyData,
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
    if (text) {
      let time = getCurrentTime();
      setTime(time);
      setOpenChat(true);

      let updated = [...chat, { sender: "You", text: text.trim(), time: time }];

      let found = dummyData.find((item) => {
        text.toLowerCase().includes(item.question.toLowerCase());
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
      setText("");
    }
  };

  return (
    <div className="inpContainer">
      <input type="text" placeholder="" value={text} onChange={handleChange} />
      <div className="btn">
        <button onClick={handleOpenChat}>Ask</button>
        <button>Save</button>
      </div>
    </div>
  );
}
