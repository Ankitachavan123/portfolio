import "./internships.scss"

export default function Internships() 
{
  const data=[
  {
    id: 1,
    img: "assets/robominds_logo.png",
    information: " ROBOMINDS is a technical workshop, established for the Scientists and Engineers of tomorrow,to promote experiential learning through hands-on activities.I was working with them as an intern. I was doing mentorship to the elementary team for WRO challenge.I was also working on my seperate robot and code. I explored coding platforms like Mindstorm, Spike. Worked on EV3. Learned to build robot, developed strategies, speed up things.",
    duration: "Duration : 2 Months",
  },
  {
    id: 2,
    img: "assets/A.png",
    information: " Aadimanie Realty's is a real estate company. I was working with them as an intern.I was writing content for there website. I also had to manage the coordination with web development team. Doing reasearch about there projects, services, reviews, documentating work was my responsibilities.I have also worked as an advisor for deciding the design of a website from deciding fonts, color, structure of website etc.",
    duration: "Duration : 6 Months",
  },
];
  return (
    <div className="internships" id="internships">
        <h1>Internships</h1>
        <div className="container">
          {data.map((d)=>(
          <div className="card">
            <div className="top">
                  <img src={d.img} alt="" />
            </div>
            <div className="center">
                  {d.information}
            </div>
            <div className="bottom">
                <h3>{d.duration}</h3>
            </div>
           
           {/* <div className="second">
           <div className="top">
                  <img src="assets/robominds_logo.png" alt="" />
            </div>
            <div className="center">
             Aadimanie Realty's is a real estate company. I was working with them as an intern. 
             I was writing content for there website. I also had to manage the coordination with web 
             development team. Doing reasearch about there projects, services, reviews, documentating work was my responsibilities. 
             I have also worked as an advisor for deciding the design of a website from deciding fonts, color, structure of website etc.
            </div>
            <div className="bottom">
                <h3>Duration : 2 Months</h3>
            </div>
           </div> */}
          </div>
           ) )}
        </div>
    </div>
  )
}



