import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Live from './components/Live';
import Main from './components/Main';
import PixelBlast from './animations/PixelBlast';
import Codes from './components/Codes';
import Contact from './components/Contact';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <Router>
      {/* Wrapping everything in a div with a dark background 
         prevents white flashes during navigation.
      */}
      <div style={{ backgroundColor: '#030014', minHeight: '100vh' }}>
        
        {/* FIXED: MobileNavbar must be OUTSIDE <Routes> to show on all pages */}
        <MobileNavbar />

        <Routes>
          <Route path="/" element={<Main />} />
          
          <Route path="/pixel" element={<PixelBlast />} />
          
          <Route path="/live" element={<Live />} />
          <Route path="/projects" element={<Codes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;