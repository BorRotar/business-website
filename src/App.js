import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./pages/Vision/Vision";


function App() {

const selectionHandler = (enteredSelection) => {
  enteredSelection = enteredSelection;
  console.log(`${enteredSelection} in App`);
};
// need to pass the state down

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Vision onSelection={selectionHandler} />}/>
        <Route path="/about" element={<About onSelection={selectionHandler} />} />
        <Route path="/contact" element={<Contact onSelection={selectionHandler}/>} />
      </Routes>
    </Router>
  );
}

export default App;
