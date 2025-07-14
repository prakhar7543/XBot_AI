import React, { useState, useRef, useEffect } from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./homePage.css";
import sideNavBarImg from "../../assets/sideNavBarImg.png";
import edit from "../../assets/edit.png";
import Navbar from "../navbar/navbar";
import mainBarImg from "../../assets/mainBarImg.png";
import Cards from "../cards/cards";
import InputBar from "../inputBar/inputBar";
import PastConversation from "../cards/pastChats";
import Conversation from "../cards/conversationCards";
import { useLocation } from "react-router-dom";

let dummyData = [
  {
    id: 1,
    question: "What's the difference between GET and POST requests?",
    response:
      "GET requests are used to retrieve data from the server, and are visible in the URL. POST requests are used to send data to the server to create/update resources, and the data is included in the body of the request, not visible in the URL.",
  },
  {
    id: 2,
    question: "Can you explain RESTful APIs?",
    response:
      "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.",
  },
  {
    id: 3,
    question: "What is a Promise in JavaScript?",
    response:
      "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that is more readable and efficient.",
  },
  {
    id: 4,
    question: "How do you handle errors in async/await?",
    response:
      "Errors in async/await can be handled using try/catch blocks. You wrap your await call inside a try block, and catch any errors that occur in the catch block.",
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    response:
      "The virtual DOM is a concept used in web development, primarily with libraries like React. It's a lightweight copy of the real DOM, allowing for efficient updates and rendering of the UI by minimizing direct manipulations of the DOM.",
  },
  {
    id: 6,
    question: "Can you describe how CORS works?",
    response:
      "CORS, or Cross-Origin Resource Sharing, is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. It involves the server setting specific headers that allow for these cross-origin requests.",
  },
  {
    id: 7,
    question: "What are microservices?",
    response:
      "Microservices are a architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. They allow for scalable, flexible, and independent development and deployment of application components.",
  },
  {
    id: 8,
    question: "Explain the concept of state management in React.",
    response:
      "State management in React involves tracking changes to the state (data) of components. This can be done using React's own state management capabilities or through external libraries like Redux, to manage state across multiple components.",
  },
  {
    id: 9,
    question: "What is a JWT and how is it used?",
    response:
      "JWT, or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties. It's used in authentication and information exchange, allowing servers to verify and trust the data in the token.",
  },
  {
    id: 10,
    question: "How do you optimize website performance?",
    response:
      "Website performance can be optimized through various methods, including minimizing HTTP requests, optimizing file sizes and formats, using content delivery networks, caching, and streamlining code (HTML, CSS, JavaScript).",
  },
];

export default function HomePage() {
  let [openChat, setOpenChat] = useState(false);
  let [time, setTime] = useState("");
  let [chat, setChat] = useState([]);
  // let [openFeedbackBox, setOpenFeedbackBox] = useState(false);
  let [openFeedbackBoxIndex, setOpenFeedbackBoxIndex] = useState(null);
  let [rating, setRating] = useState({});
  let [feedback, setFeedback] = useState({});
  let [feedbackOpinion, setFeedbackOpinion] = useState({});
  let [activeChat, setActiveChat] = useState(null);
  let [savedChats, setSavedChats] = useState([]);
  let chatRef = useRef();
  let location = useLocation();


  useEffect(() => {
    if (location.pathname === "/") {
      setOpenChat(false);
      setTime("");
      setChat([]);
      setActiveChat(null);
    }
  }, [location.pathname]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem('chatData')) || [];
    setSavedChats(storedData);
  }, []);

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (
        !openFeedbackBoxIndex &&
        chatRef.current &&
        !chatRef.current.contains(e.target)
      ) {
        setOpenChat(false);
        setTime("");
        setChat([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openFeedbackBoxIndex]);

  function HomeContent({
    setOpenChat,
    setTime,
    chat,
    setChat,
    dummyData,
    time,
    rating,
  }) {
    return (
      <div className="content">
        <div className="header">
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              marginBottom: "0px",
            }}
          >
            How Can I Help You Today?
          </p>
          <div style={{ width: "65px", height: "69px" }}>
            <img
              src={mainBarImg}
              alt="ico"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        <div className="cardContent">
          {/* <-----------------------cards--------------------------> */}
          <Cards />
        </div>

        <div className="inputContainer">
          {/* <-------------------input------------------> */}
          <InputBar
            setOpenChat={setOpenChat}
            setTime={setTime}
            chat={chat}
            setChat={setChat}
            dummyData={dummyData}
            time={time}
            rating={rating}
          />
        </div>
      </div>
    );
  }

  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        <PastConversation setActiveChat={setActiveChat} savedChats={savedChats} />
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
        <Navbar goToHomePage={() => {
          setActiveChat(null);
          setChat([]);
          setOpenChat(false);
          setTime('');
        }} />

        {/* CONDITIONAL RENDERING LOGIC */}
        {activeChat ? (
          // Show past chat
          <div
            className="parentConversationContainer"
            ref={chatRef}
            style={{ overflowY: "auto" }}
          >
            <Conversation
              dummyData={dummyData}
              chat={activeChat.chat}
              time={activeChat.time}
              feedback={activeChat.feedback}
              rating={activeChat.rating}
              feedbackOpinion={activeChat.feedbackOpinion}
              openFeedbackBoxIndex={openFeedbackBoxIndex}
              setOpenFeedbackBoxIndex={setOpenFeedbackBoxIndex}
            />
            
          </div>
        ) : !openChat ? (
          // Show homepage
          <HomeContent
            setOpenChat={setOpenChat}
            setTime={setTime}
            chat={chat}
            setChat={setChat}
            dummyData={dummyData}
            time={time}
            rating={rating}
          />
        ) : (
          // Show ongoing chat
          <div
            className="parentConversationContainer"
            ref={chatRef}
            style={{ overflowY: "auto" }}
          >
            <Conversation
              dummyData={dummyData}
              time={time}
              chat={chat}
              openFeedbackBoxIndex={openFeedbackBoxIndex}
              setOpenFeedbackBoxIndex={setOpenFeedbackBoxIndex}
              rating={rating}
              setRating={setRating}
              feedback={feedback}
              setFeedback={setFeedback}
              feedbackOpinion={feedbackOpinion}
              setFeedbackOpinion={setFeedbackOpinion}
            />
            <div className="inputContainer">
              <InputBar
                setOpenChat={setOpenChat}
                time={time}
                setTime={setTime}
                chat={chat}
                setChat={setChat}
                dummyData={dummyData}
                feedback={feedback}
                rating={rating}
                feedbackOpinion={feedbackOpinion}
                setSavedChats={setSavedChats}
              />
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
