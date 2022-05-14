import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./pages/Vision/Vision";


function App() {
  const  saveDataHandler = (enteredData) => {
    const data = {
      enteredData,
      id: Math.random().toString()
    };
    console.log(data);
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Vision onSaveData={saveDataHandler} />}/>
        <Route path="/about" element={<About info={saveDataHandler}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
