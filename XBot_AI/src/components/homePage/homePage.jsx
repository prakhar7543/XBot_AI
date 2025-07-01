import * as React from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./homePage.css";
import sideNavBarImg from "../../assets/sideNavBarImg.png";
import edit from "../../assets/edit.png";
import Navbar from "../navbar/navbar";
import mainBarImg from "../../assets/mainBarImg.png";
import Cards from '../cards/cards';
import InputBar from "../inputBar/inputBar";

export default function HomePage() {
  return (
    <Grid container sx={{ width: "100vw", height: '100vh',display: 'flex', flexDirection: 'column'  }}>
      {/* <------------sidebar---------------> */}
      <Grid
        item
        xs={0}
        md={3}
        lg={3}
        sx={{ backgroundColor: "white", height: "100vh", display: {xs: 'none', md: 'block'}, 
        width: '25vw' 
      }}
      >
        <div className="sideNavbar">
          <div style={{ width: "50px", height: "50px", paddingLeft: "8px" }}>
            <img
              src={sideNavBarImg}
              alt="icon"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          <p style={{ fontSize: "x-large", fontWeight: "500" }}>New Chat</p>
          <div style={{ width: "35px", height: "30px", paddingRight: "8px" }}>
            <img
              src={edit}
              alt="edit"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "100%",
                width: "100%",
                 cursor: 'pointer',
              }}
            />
          </div>
        </div>
        {/* <h2>Past Conversations</h2> */}
      </Grid>
      {/* <----------------mainbar-----------------> */}
      <Grid
        item
        xs={12}
        md={9}
        lg={9}
        sx={{
          background: 'linear-gradient(to bottom, #e9ddf7, #f1ecec)',
          height: "100vh",
          width: {xs: '100vw', md: '75vw', lg: '75vw'},
          // background: {xs: 'linear-gradient(to bottom, #e9ddf7, #f1ecec)'}
        }}
      >
        <Navbar />
        <div className="content">
          <div className="header">
            <p style={{fontSize: '28px', fontWeight: '500', marginBottom: '0px'}}>How Can I Help You Today?</p>
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
            <InputBar/>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
