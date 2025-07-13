import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import menuBar from "../../assets/menuBar.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate("/");
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <div
        className="menuIcon"
        style={{
          display: "none", // Optional: hide on all screens or adjust per screen size
          width: "23px",
          height: "15px",
        }}
      >
        <img src={menuBar} alt="menu" />
      </div>
      <div style={{ color: "#9785BA" }}>
        <h1
          style={{ marginTop: "3px", paddingLeft: "10px", cursor: "pointer", marginBottom: '15px' }}
          onClick={handleClick}
        >
          Bot AI
        </h1>
      </div>
    </div>
  );
}
