import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About"
//import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects"
import Internships from "./components/internships/Internships";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
   <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <About/>
       <Projects/>
       <Internships/>
       <Contact/>
     </div>
   </div> 
  );
}

export default App;
