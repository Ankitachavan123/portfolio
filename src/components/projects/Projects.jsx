import react, { useState } from "react";
import "./projects.scss"

export default function Projects() {
      const [currentSlide,setCurrentSlide] = useState(0)
  const data = [
         {
           id: "1",
           //icon: "./assets/image_of_website.png",
           title: "Frontend Website",
           subtitle: "Personal Project",
           desc:
              "Developed a frontend for a website of a tourist company. Used basic HTML,CSS and JavaScript concepts to make the website more responsive and more user friendly.",
           subdesc: "Tech Exposure : VS Code, HTML, CSS, JS",
           img1: "assets\image_of_website.png",
           img2: "assets\img_second.png",
           img3: "assets\img_third.png",
         },
         {
          id: "2",
         // icon: "./assets/image_of_website.png",
          title: "Smart Dustbin",
          subtitle: "Group Project",
          desc:
              "Implemented the smart dustbin which can do the automatic segregation of the wet and dry garbage and monitors the level of garbage in dustbin and if its full sends sms to concerned authority",
          subdesc: "Tech Exposure : Arduino, Proteus, GSM",
            img1: "assets\dustbin_1.jpg",
            img2: "assets\dustbin_2.jpg",
            img3: "assets\Screenshot (8).png",
         },
         {
          id: "3",
         // icon: "./assets/image_of_website.png",
          title: "Add watermark to an image",
          subtitle: "Group Project",
          desc:
             "Used digital image processing concepts for the implementation. User can add a watermark to an image with several paramenters as size, location coordinate",
          subdesc: "Tech Exposure : Python, OpenCV",
          img1: "assets\op1.png",
          img2: "assets\op2.png",
          img3: "assets\op3.png",
         },
  ];

  const HandleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0)
  };
  return (
    <div className="projects" id="projects">
      <div className="slider" style={{transform: 'translateX(-${currentSlide *100}vw)'}}>
      
        {data.map((d) => (
          <div className="container">
            
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgconiainer">
                </div>
                <h2>{d.title}</h2>
                <p>{d.subtitle}</p>
                <p>{d.desc}</p>
                <h5>{d.subdesc}</h5>
              </div>
            </div>
            <div className="right">
            
              <div className="img1">
              <img src={d.img1}
                   alt=""
              />
              </div>
              <div className="img2">
              <img src={d.img2}
                   alt=""
              />
              </div>
              <div className="img3">
              <img src={d.img3}
                   alt=""
              />
              </div>
            </div>
          </div>
        
        </div>
        ))
}
      </div>
        
      <img src="assets\arrow.png" className="arrow left" alt=" " onClick={()=>HandleClick("left")}/>
      <img src="assets\arrow.png" className="arrow right" alt=" " onClick={()=>HandleClick("right")}/>
    </div>
  )
}
