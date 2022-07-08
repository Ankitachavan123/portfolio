import "./topbar.scss"
import {Call,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>  
        <div className="wrapper">

          <div className="left">
              <a href="#intro" className="logo">my_portfolio</a>
              <div className="itemContainer">
                  <Call className="icon"/>
                  <span>+836 978 0679</span>
                  <Mail className="icon"/>
                  <span>er.ankitachavan@gmail.com</span>
              </div>
          </div>

          <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>     
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
          </div>

        </div>
    </div>
  )
}
