import React from 'react';

function Contact() {
  return (
    <main className="App-main">
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Join Us!</h2>
          <p className="contact-description">
            Ready to be part of our amazing community? Follow us on social media and stay updated with our latest events!
          </p>
          
          <div className="social-links">
            <a href="https://www.facebook.com/asa_antwerpen" target="_blank" rel="noopener noreferrer" className="social-link">
              📘 Facebook
            </a>
            <a href="https://www.tiktok.com/@asa_antwerpen" target="_blank" rel="noopener noreferrer" className="social-link">
              🎵 TikTok
            </a>
            <a href="https://instagram.com/asa_antwerpen" target="_blank" rel="noopener noreferrer" className="social-link">
              📸 Instagram
            </a>
            <a href="https://linktr.ee/asa_antwerpen" target="_blank" rel="noopener noreferrer" className="social-link">
              🔗 All Links
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
