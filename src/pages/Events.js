import React from 'react';

function Events() {
  return (
    <main className="App-main">
      {/* Events Section */}
      <section id="events" className="events-section">
        <div className="container">
          <h2 className="section-title">Our Events</h2>
          
          <div className="events-grid">
            <div className="event-card">
              <h3 className="event-title">🎤 ASA Karaoke</h3>
              <p className="event-description">
                Showcase your singing talents and socialize with fellow students at our popular karaoke nights.
              </p>
            </div>
            
            <div className="event-card">
              <h3 className="event-title">⛸️ ASA On Ice</h3>
              <p className="event-description">
                Annual ice-skating event open to all skill levels. Perfect for winter fun and making new friends.
              </p>
            </div>
            
            <div className="event-card">
              <h3 className="event-title">☕ ASA Café</h3>
              <p className="event-description">
                Casual themed gatherings with delicious food, games, and opportunities to connect.
              </p>
            </div>
            
            <div className="event-card">
              <h3 className="event-title">🎊 Kennismakingsavond</h3>
              <p className="event-description">
                Annual introduction evening to welcome new Asian students with fun games and quizzes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Events;
