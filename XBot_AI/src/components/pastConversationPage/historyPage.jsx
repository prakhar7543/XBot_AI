// src/components/pastConversationPage/historyPage.jsx
import InputBar from "../inputBar/inputBar";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Navbar from "../navbar/navbar";
import sideNavBarImg from "../../assets/sideNavBarImg.png";
import edit from "../../assets/edit.png";
import Conversation from "../cards/conversationCards";
import PastConversation from "../cards/pastChats"; // Sidebar link
import "./historyPage.css";

export default function HistoryPage() {
  const [savedChats, setSavedChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);
  const [selectedRating, setSelectedRating] = useState("all");

  // Load and sort saved chats (latest first)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("chatData")) || [];
    const sorted = stored.slice().reverse(); // latest first
    setSavedChats(sorted);
    setFilteredChats(sorted);
  }, []);

  // Rating filter handler
  function filterByRating(rating) {
    setSelectedRating(rating);

    if (rating === "all") {
      setFilteredChats(savedChats);
    } else {
      const filtered = savedChats.filter((chat) => {
        const ratings = chat.rating ? Object.values(chat.rating) : [];

        for (let i = 0; i < ratings.length; i++) {
          if (ratings[i] >= parseInt(rating)) {
            return true;
          }
        }

        return false;
      });

      setFilteredChats(filtered);
    }
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
        <div className="historysideNavbar">
          {/* Bot AI icon */}
          <div style={{ width: "50px", height: "50px", paddingLeft: "8px" }}>
            <img
              src={sideNavBarImg}
              alt="icon"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          {/* New Chat link */}
          <a href="/" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "x-large", fontWeight: "500", color: "black" }}>
              New Chat
            </p>
          </a>

          {/* Edit icon */}
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

        {/* Sidebar Past Conversations link */}
        <PastConversation />
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
          overflowY: "auto",
        }}
      >
        <Navbar />

        {/* Filter and Title */}
        <div style={{ padding: "10px 20px" }}>
          <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'5px'}}>Conversation History</h2>
          <label>
            Filter by Rating:{" "}
            <select
              value={selectedRating}
              onChange={(e) => filterByRating(e.target.value)}
            >
              <option value="all">All</option>
              <option value="1">1★ and above</option>
              <option value="2">2★ and above</option>
              <option value="3">3★ and above</option>
              <option value="4">4★ and above</option>
              <option value="5">5★ only</option>
            </select>
          </label>
        </div>

        {/* Show past chats */}
        {filteredChats.length === 0 ? (
          <p style={{ padding: "20px" }}>No conversations found.</p>
        ) : (
          filteredChats.map((chatData, i) => (
            <div
              key={i}
              style={{
                // border: "1px solid #ccc",
                borderRadius: "8px",
                margin: "10px 20px",
                padding: "10px",
                // backgroundColor: "#fff",
              }}
            >
              <Conversation
                chat={chatData.chat}
                time={chatData.time}
                feedback={chatData.feedback}
                rating={chatData.rating}
                feedbackOpinion={chatData.feedbackOpinion}
                openFeedbackBoxIndex={null}
                setOpenFeedbackBoxIndex={() => {}}
                isHistoryPage={true}
              />
            </div>
          ))
        )}

        <div className="inputContainer" style={{ padding: "10px 20px" }}>
          <InputBar
            setOpenChat={() => {}}
            setTime={() => {}}
            chat={[]}
            setChat={() => {}}
            dummyData={[]}
            time=""
            rating={{}}
            feedback={{}}
            feedbackOpinion={{}}
            setSavedChats={() => {}}
          />
        </div>
      </Grid>
    </Grid>
  );
}


/*
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
      //  Sidebar 
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

          // Home navigation   
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

      // Main Chat Area 
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
*/
