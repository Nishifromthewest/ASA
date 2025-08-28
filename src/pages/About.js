import React from 'react';

function About() {
  return (
    <main className="App-main">
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About ASA Antwerpen</h2>
          <p className="section-description">
            The Asian Student Association Antwerpen unites students with an interest in Asian culture, 
            fostering a community that shares Asian heritage while embracing Belgian culture.
          </p>
          
          <div className="mission-grid">
            <div className="mission-card">
              <h3 className="mission-title">🤝 Community</h3>
              <p className="mission-description">
                Building bridges between cultures and creating lasting friendships
              </p>
            </div>
            
            <div className="mission-card">
              <h3 className="mission-title">🎌 Culture</h3>
              <p className="mission-description">
                Celebrating and preserving Asian traditions and heritage
              </p>
            </div>
            
            <div className="mission-card">
              <h3 className="mission-title">🎉 Events</h3>
              <p className="mission-description">
                Organizing engaging activities and memorable experiences
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
