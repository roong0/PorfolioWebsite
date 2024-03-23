import { useState, useEffect } from 'react'
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
//import About from './components/About';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
//import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // Figure out whats the point of a timeout
  const [load, upDateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upDateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <BrowserRouter>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="*" element={<Navigate to="/"/>} />    
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
