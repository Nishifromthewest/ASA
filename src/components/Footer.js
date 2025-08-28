import React from 'react';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ASA Antwerpen</h4>
          <p>Asian Student Association - Antwerpen</p>
          <p>Bridging cultures, building friendships</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="about">About Us</a></li>
            <li><a href="events">Events</a></li>
            <li><a href="team">Our Team</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links-footer">
            <a href="https://www.instagram.com/asaantwerpen/?hl=en" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@asa_antwerpen" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 ASA Antwerpen - Asian Student Association Antwerpen</p>
      </div>
    </footer>
  );
}

export default Footer;
