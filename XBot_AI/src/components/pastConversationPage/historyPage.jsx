import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Navbar from "../navbar/navbar";
import sideNavBarImg from "../../assets/sideNavBarImg.png";
import edit from "../../assets/edit.png";
import PastConversation from "../cards/pastChats";
import Conversation from "../cards/conversationCards";

// ✅ Utility to read query params like ?index=0
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function HistoryPage() {
  const query = useQuery();
  const index = parseInt(query.get("index"), 10); // ✅ Get index from URL

  const [chatData, setChatData] = useState(null);
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chatData")) || [];
    setSavedChats(storedChats);
    if (!isNaN(index) && storedChats[index]) {
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

          {/* Home navigation */}
          <a href="/" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "x-large", fontWeight: "500", color: "black" }}>
              New Chat
            </p>
          </a>

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

      {/* Main Chat Area */}
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
