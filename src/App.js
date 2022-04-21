
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Vision from './components/Vision/Vision';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Vision />} />
        <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
