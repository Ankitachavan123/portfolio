import "./about.scss"
import {ArrowRight} from "@material-ui/icons"

export default function about() {
  return (
    <div className="about" id="about">
      <div className="headline"><h1>About</h1></div>
         <div className="container1">
          <div className="wrapper">
            <ArrowRight className="icon"/>I am Final Year student. Pursuing my B.Tech in Electronics and Telecommunication from MKSSS Cummins College of Engineering, Pune.
          </div>
          </div>

        <div className="container2">
          <div className="wrapper">
            <ArrowRight className="icon"/>I have good knowledge of Data structures and Algorithms. I enjoy Applying my knowledge of data structures and algorithms in solving real life problems.
          </div>
        </div>

        <div className="container3">
        <div className="wrapper">
           <ArrowRight className="icon"/>I am a Front End Developer who focuses on writing clean, elegant and efficient code.
        </div>
        </div>

        <div className="container4">
        <div className="wrapper">
           <ArrowRight className="icon"/>I am passionate about creating interactive applications and experiences on the web.
        </div>
        </div> 

        <div className="container5">
        <div className="wrapper">
           <ArrowRight className="icon"/>I have knowledge of:
        </div>
        </div> 
        
        <div className="skills">
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
        </div>

    </div>
  )
}
