import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Navbar from "../navbar/navbar";
import sideNavBarImg from "../../assets/sideNavBarImg.png";
import edit from "../../assets/edit.png";
import PastConversation from "../cards/pastChats";
import Conversation from "../cards/conversationCards";

export default function HistoryPage() {
  const location = useLocation();
  const index = location.state?.index;

  const [chatData, setChatData] = useState(null);
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chatData")) || [];
    setSavedChats(storedChats);
    if (typeof index === "number" && storedChats[index]) {
      setChatData(storedChats[index]);
    }
  }, [index]);

  if (!chatData) {
    return (
      <>
        <Navbar />
        <p style={{ padding: "20px" }}>No conversation found.</p>
      </>
    );
  }

  return (
    <Grid container sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      {/* Sidebar */}
      <Grid
        item
        xs={0}
        md={3}
        lg={3}
        sx={{
          backgroundColor: "white",
          height: "100vh",
          display: { xs: "none", md: "block" },
          width: "25vw",
        }}
      >
        <div className="sideNavbar">
          <div style={{ width: "50px", height: "50px", paddingLeft: "8px" }}>
            <img
              src={sideNavBarImg}
              alt="icon"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <a href="/" style={{ textDecoration: "none" }}>
  <p style={{ fontSize: "x-large", fontWeight: "500", color: 'black' }}>
    New Chat
  </p>
</a>

          {/* <p style={{ fontSize: "x-large", fontWeight: "500" }}>New Chat</p> */}
          <div style={{ width: "35px", height: "30px", paddingRight: "8px" }}>
            <img
              src={edit}
              alt="edit"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <PastConversation savedChats={savedChats} />
      </Grid>

      {/* Main Panel */}
      <Grid
        item
        xs={12}
        md={9}
        lg={9}
        sx={{
          background: "linear-gradient(to bottom, #e9ddf7, #f1ecec)",
          height: "100vh",
          width: { xs: "100vw", md: "75vw" },
        }}
      >
        <Navbar />

        {/* Past Chat Conversation Only */}
        <div
          className="parentConversationContainer"
          style={{ overflowY: "auto" }}
        >
          <Conversation
            chat={chatData.chat}
            time={chatData.time}
            feedback={chatData.feedback}
            rating={chatData.rating}
            feedbackOpinion={chatData.feedbackOpinion}
            openFeedbackBoxIndex={null}
            setOpenFeedbackBoxIndex={() => {}}
          />
        </div>
      </Grid>
    </Grid>
  );
}



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "../navbar/navbar";
// import Conversation from "../cards/conversationCards";

// export default function HistoryPage() {
//   const location = useLocation();
//   const index = location.state?.index;

//   const [chatData, setChatData] = useState(null);

//   useEffect(() => {
//     const savedChats = JSON.parse(localStorage.getItem("chatData")) || [];
//     if (typeof index === "number" && savedChats[index]) {
//       setChatData(savedChats[index]);
//     }
//   }, [index]);

//   if (!chatData) {
//     return (
//       <>
//         <Navbar />
//         <p>No conversation found.</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <Conversation
//         chat={chatData.chat}
//         time={chatData.time}
//         feedback={chatData.feedback}
//         rating={chatData.rating}
//         feedbackOpinion={chatData.feedbackOpinion}
//         openFeedbackBoxIndex={null}
//         setOpenFeedbackBoxIndex={() => {}}
//       />
//     </>
//   );
// }
