import React from "react";
import "./navbar.css";
import menuBar from "../../assets/menuBar.png";

export default function Navbar({ goToHomePage }) {
  let handleClick = () => {
    if (goToHomePage) {
      goToHomePage();
    }
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <div
        className="menuIcon"
        style={{
          display: { xs: "block", md: "none", lg: "none" },
          width: "23px",
          height: "15px",
        }}
      >
        <img src={menuBar} alt="menu" />
      </div>
      <div style={{ color: "#9785BA" }}>
        <h2
          style={{ marginTop: "10px", paddingLeft: "10px", cursor: "pointer" }}
          onClick={handleClick}
        >
          Bot AI
        </h2>
      </div>
    </div>
  );
}
