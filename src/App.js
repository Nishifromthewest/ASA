import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Gallery from './pages/gallery'; // Import the new page/component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Add the new route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
