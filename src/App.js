import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./pages/Vision/Vision";


function App() {
const [option, setOption] = useState("Please select an option");
const selectionHandler = (enteredSelection) => {
  
  console.log(`${enteredSelection} in App`);
};
// need to pass the state down

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Vision onSelection={selectionHandler} onOption={setOption}/>}/>
        <Route path="/about" element={<About onSelection={selectionHandler} />} />
        <Route path="/contact" element={<Contact onSelection={selectionHandler} onOption={option}/>} />
      </Routes>
    </Router>
  );
}

export default App;
