import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
/* import Topbar from "./components/topbar/Topbar"; */
import Works from "./components/works/Works";
import "./App.css";
import Topbar from "./components/topbar/Topbar";


function App() {
  return (
    <div className="App">
        <div className="tb">
        <Topbar/>
        </div>
     <div className="sections">
        

        <Intro/>
        <Works/>
        <Portfolio/>
        <Contact/> 

     </div>
      
    </div>
  );
}

export default App;
