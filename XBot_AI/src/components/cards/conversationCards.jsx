import React, { useEffect, useRef,  } from "react";
import "./conversationCards.css";
import userPic from "../../assets/userPic.png";
// import sideNavbarImg from "../../assets/sideNavbarImg.png";
import thumbsUp from "../../assets/thumbsUp.png";
import thumbsDown from "../../assets/thumbsDown.png";
import soulAi from "../../assets/soulAi.png";
import FeedBackDialogBox from "../feedBackDialogBox/feedBackDialogBox";
import FeedbackRating from "../feedBackDialogBox/ratings";

export default function Conversation({
  time,
  chat,
  openFeedbackBoxIndex,
  setOpenFeedbackBoxIndex,
  rating,
  setRating,
  feedback,
  setFeedback,
  feedbackOpinion,
  setFeedbackOpinion,
}) {
  // let [feedback, setFeedback] = useState({});
  // let [feedbackOpinion, setFeedbackOpinion] = useState({});

  let endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  let handleThumbsDownClick = (index) => {
    setFeedback((prev) => {
      if (feedback[index] === "up") {
        return { ...prev, [index]: null };
      } else {
        return { ...prev, [index]: "down" };
      }
    });
    // setSelectedIndex(index)
    setOpenFeedbackBoxIndex(index);
  };

  let handleThumbsUpClick = (index) => {
    setFeedback((prev) => {
      if (feedback[index] === "up") {
        return { ...prev, [index]: null };
      } else {
        return { ...prev, [index]: "up" };
      }
    });
  };

  let handleRating = (index, val) => {
    setRating((prev) => ({
      ...prev,
      [index]: val,
    }));
  };

  return (
    <>
      <div className="conversationContainer">
        {chat.map((msg, index) => (
          <div key={index} className="conversationCard">
            <div className="profilePic">
              <img
                src={msg.sender === "You" ? userPic : soulAi}
                alt="profile"
              />
            </div>

            <div className="chat">
              <div style={{ paddingTop: "10px" }}>
                <span style={{ fontWeight: "600", fontSize: "18px" }}>
                  {msg.sender}
                </span>
                <p style={{paddingRight: '10px'}}>{msg.text}</p>
              </div>

              <div className="timeThumbs">
                <p style={{ color: "#0000009E", paddingBottom: "5px" }}>
                  {msg.time}
                </p>

                {msg.sender !== "You" &&
                  (!feedbackOpinion[index] ? (
                    <div
                      className="thumbsUp"
                      style={{ height: "16px", width: "43px" }}
                    >
                      <img
                        src={thumbsUp}
                        alt="up"
                        style={{
                          pointerEvents: "all",
                          backgroundColor:
                            feedback && feedback[index] === "up"
                              ? "#878181"
                              : "transparent",
                        }}
                        onClick={() => handleThumbsUpClick(index)}
                      />
                      <img
                        src={thumbsDown}
                        alt="down"
                        style={{ pointerEvents: "all" }}
                        onClick={() => handleThumbsDownClick(index)}
                      />
                    </div>
                  ) : (
                    <div
                      className="ratings"
                      style={{
                        height: "80px",
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "column",
                      }}
                    >
                      <div style={{ width: "70px", height: "70px", display: 'flex', alignItems: 'end' }}>
                        <FeedbackRating
                          rating={rating[index] || 0}
                          setRating={(val) => handleRating(index, val)}
                        />
                      </div>

                      <div
                        className="comments"
                        style={{
                          width: "auto",
                          height: "22px",
                          paddingBottom: "5px",
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>Feedback: </span>
                        {feedbackOpinion[index]}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      <div className="feedback">
        {openFeedbackBoxIndex && (
          <FeedBackDialogBox
            openFeedbackBoxIndex={openFeedbackBoxIndex}
            setOpenFeedbackBoxIndex={setOpenFeedbackBoxIndex}
            feedbackOpinion={feedbackOpinion}
            setFeedbackOpinion={setFeedbackOpinion}
          />
        )}
      </div>
    </>
  );
}
