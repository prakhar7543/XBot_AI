import React, { useEffect, useRef } from "react";
import './conversationCards.css';
import userPic from '../../assets/userPic.png';
import sideNavbarImg from '../../assets/sideNavbarImg.png';


export default function Conversation({time, chat}){

   let endRef = useRef();

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [chat]);

    return(
        <div className="conversationContainer">

            {chat.map((msg, index) => (
            <div key={index} className="conversationCard">
                <div className="profilePic">
              <img src={msg.sender === 'You'? userPic : sideNavbarImg} alt="profile" /> 
                </div>

              <div className="chat">
                <div style={{paddingTop: '10px'}}>
                    <p style={{fontWeight: '600', fontSize: '18px'}}>{msg.sender}</p>
                    <p>{msg.text}</p>
                </div>
                <div>
                    <p style={{color: '#0000009E', paddingBottom: '5px'}}>{msg.time}</p>
                </div>
                </div> 
            </div>
            ))}
            <div ref={endRef}></div>
        </div>
    )
}