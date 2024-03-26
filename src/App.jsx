import { useState, useEffect } from 'react'
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
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
