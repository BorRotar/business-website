import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./components/Vision/Vision";
import TextContext from "./context/text-context";

function App() {

const [textMessage, setTextMessage] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <TextContext.Provider value={{ text: false }}>
          <Route path="/" exact element={<Vision />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </TextContext.Provider>
      </Routes>
    </Router>
  );
}

export default App;
