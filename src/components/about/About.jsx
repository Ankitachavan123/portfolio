import "./about.scss"
import {ArrowRight} from "@material-ui/icons"

export default function about() {
  return (
    <div className="about" id="about">
      <div className="headline"><h1>About</h1></div>
         <div className="container1">
          <div className="wrapper">
            <ArrowRight className="icon"/>
            <div className="content">
            <h3>B.Tech Final year student | Electronics and Telecommunication </h3>
            <h4>| {'      '} Mksss Cummins College of Engineering </h4>
            <h4>| CGPA : 8.3</h4>
            </div>
          </div> 
          </div>

        <div className="container2">
          <div className="wrapper">
            <ArrowRight className="icon"/>
            <div className="content">
             <h3>My area of interest : </h3>
             <h4>| {'     '}Data Structure and Algorithms</h4>
             <h4>| {'     '}Frontend Developver</h4>
             </div>
          </div>
        </div>

        
        
        <div className="container3">
        <img src="assets\pie.png" alt=""/>
        </div>
        {/* <div className="container3">
        <div className="wrapper">
           <ArrowRight className="icon"/>I am a Front End Developer who focuses on writing clean, elegant and efficient code.
        </div>
        </div> */}

        {/* <div className="container4">
        <div className="wrapper">
           <ArrowRight className="icon"/><h5>passionate about creating interactive applications and better user experiences on the web.</h5>
        </div>
        </div>  */}

        {/* <div className="container5">
        <div className="wrapper">
           <ArrowRight className="icon"/>I have knowledge of:
        </div>
        </div>  */}
        
        {/* <div className="skills">
        <div className="dsa">
          <button>C++</button>
        </div>
        <div className="dev">
           <button >Data Structures and algorithms</button>
           <button>Operating System</button>
           <button>Database Management System</button>     
        </div>
        <div className="core">
           <button>HTML</button>
           <button>CSS</button>
           <button>JS</button>
           <button>React JS</button>
        </div>
        </div> */}

    </div>
  )
}
