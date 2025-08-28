import React from 'react';
import InstagramFeed from '../components/InstagramFeed';

function Home() {
  return (
    <main className="App-main">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to ASA Antwerpen</h2>
          <p className="hero-subtitle">
            Bridging Asian Heritage with Belgian Culture
          </p>
          <p className="hero-description">
            Join our vibrant community of students who share a passion for Asian culture. 
            Make new friends, celebrate traditions, and create unforgettable memories in Antwerpen.
          </p>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <InstagramFeed />
    </main>
  );
}

export default Home;
