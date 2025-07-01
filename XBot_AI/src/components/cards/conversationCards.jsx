import React from "react";
import './conversationCards.css';
import userPic from '../../assets/userPic.png';
import sideNavbarImg from '../../assets/sideNavbarImg.png';


export default function Conversation({dummyData, time}){

   

    return(
        <div className="conversationContainer">
            <div className="conversationCard">
                <div className="profilePic">
              <img src={userPic} alt="profile" /> 
                </div>

              <div className="chat">
                <div style={{paddingTop: '10px'}}>
                    <p style={{fontWeight: '600', fontSize: '18px'}}>username</p>
                    <p>hiii..</p>
                </div>
                <div>
                    <p style={{color: '#0000009E', paddingBottom: '5px'}}>{time}</p>
                </div>
                </div> 
            </div>
        </div>
    )
}