import React, { useState } from "react";
import './inputBar.css';


export default function InputBar(){
    let [text, setText] = useState('');

    let handleChange = (e) => {
        let value = e.target.value;
        setText(value);
    }

    return(
        <div className="inpContainer">
          <input type="text" placeholder="" value={text} onChange={handleChange}/>
          <div className="btn">
          <button>Ask</button>  
          <button>Save</button>  
          </div>

        </div>
    )
}