//import { Height } from "@material-ui/icons"
import "./intro.scss"
import { init } from "ityped";
//import { useEffect, useRef } from "react"
import React, { useEffect, useState } from "react";

export default function intro() {

  const TextRef = useState();  // useState is a react hook

  useEffect(() => {
    init(TextRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-end Developer", "Skilled Programmer"] ,
    });
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
          <div className="imgContainer">
            <img src="assets\transparent-bg-anki.png" alt=" "/>
          </div>
      </div>
      <div className="right">
        <div className="wrapper">
           <h3>Hi There, I'm</h3>
           <h1>Ankita Chavan</h1>
           <h2><span ref={TextRef}></span></h2>
           <h2><span ref={TextRef}></span></h2>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
