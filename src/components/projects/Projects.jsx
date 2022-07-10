import { useState } from "react";
import "./projects.scss"

export default function Projects() {
      const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
         {
           id: "1",
           //icon: "./assets/image_of_website.png",
           title: "Frontend Website",
           subtitle: "Personal Project",
           desc:
              "Developed a frontend for a website of a tourist company. Used basic HTML,CSS and JavaScript concepts to make the website more responsive and more user friendly.",
           subdesc: "Tech Exposure : VS Code, HTML, CSS, JS",
           img1:
             "assets/image_of_website.png",
           // img1: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          // img1: "https://www.google.com/search?q=random+image&rlz=1C1ONGR_enIN975IN975&sxsrf=ALiCzsZI-oEqZ1oe3xEQerJRc-MOuwd8XA:1657388132195&tbm=isch&source=iu&ictx=1&vet=1&fir=jsbCYSW7o-fL-M%252CeLpSyvMoM8brnM%252C_%253BEpwlzJ8ekN85kM%252CYpYw_trHdY78IM%252C_%253BTVP7it9FrTPFrM%252CIKz2POPuVoNi_M%252C_%253BhbXVK53csZJ90M%252CSTZl94xPDziutM%252C_%253BqtGeJM2WMobK5M%252CnSInwTxzYbTmJM%252C_%253BMU5EOEn2O0sGyM%252C0CP6VaHvjswEVM%252C_%253BCiN6SP4MjTwCWM%252CKbxSwCHn8X-q5M%252C_%253BNjZ5AWAzvGaSYM%252C94O_wgEocuU6jM%252C_%253B1At5-1YCmIhieM%252CLq6YA9em6nGKeM%252C_%253B1F867b4hQ-YSdM%252CC063LPn7sNb0TM%252C_%253B_DKx0O4fB9KlLM%252CeLpSyvMoM8brnM%252C_%253Bk55dSe-SyRLpVM%252CRaG63Wpx0MhExM%252C_%253BwJBsq787G4UJhM%252C9R1uwnZJ3IIwFM%252C_&usg=AI4_-kTIwJnzSDuT5lGNgJSWW_8I-o4quA&sa=X&ved=2ahUKEwj0if_2q-z4AhW4xHMBHQDPBikQ9QF6BAgEEAE#imgrc=jsbCYSW7o-fL-M",
          // img1: "C:\Users\Ankita A. Chavan\Desktop\Development\portfolio\public\assets\dustbin_1.jpg",
          img2:"assets/img_second.png",
           img3:
             "assets/img_third.png",
         },
         {
          id: "2",
         // icon: "./assets/image_of_website.png",
          title: "Smart Dustbin",
          subtitle: "Group Project",
          desc:
              "Implemented the smart dustbin which can do the automatic segregation of the wet and dry garbage and monitors the level of garbage in dustbin and if its full sends sms to concerned authority",
          subdesc: "Tech Exposure : Arduino, Proteus, GSM",
            img1:
              "assets/dustbin_1.jpg",
            img2:
              "assets/dustbin_2.jpg",
            img3:
              "assets/Screenshot (8).png",
         },
         {
          id: "3",
         // icon: "./assets/image_of_website.png",
          title: "Add watermark to an image",
          subtitle: "Group Project",
          desc:
             "Used digital image processing concepts for the implementation. User can add a watermark to an image with several paramenters as size, location coordinate",
          subdesc: "Tech Exposure : Python, OpenCV",
          img1:
            "assets/op1.png",
          img2:
            "assets/op2.png",
          img3:
            "assets/op3.png",
         },
  ];

  const HandleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0)
  };
  return (
    <div className="projects" id="projects">
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
      
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
