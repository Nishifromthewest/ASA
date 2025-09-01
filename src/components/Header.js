import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="App-header">
      {/* Logo Box */}
      <div className="logo-box">
        <Link to="/" aria-label="Go to Home">
          <img src="..//logo.png" alt="ASA Logo" className="logo" />
        </Link>
      </div>

      <h1>ASA Antwerpen</h1>
      <p>Asian Student Association - Antwerpen</p>
      <button 
        className="hamburger-button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
