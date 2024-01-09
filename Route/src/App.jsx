// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts"; // Fixed import
import './App.css'
function App() {
  // Removed unused state variable

  return (
    <>
      <div>
        <div className="head">
          <Link to="/home">
            <h1>Kalvium</h1>
          </Link>
          <div className="right">
            <Link to="/about">
              <h1>About</h1>
            </Link>
            <Link to="/contact">
              <h1>Contact</h1>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
