import React, { useEffect } from 'react';
import './Team.css'; // Ensure you create and link a CSS file for the styles

function Team() {
  useEffect(() => {
    // Adjust card height for 9:16 aspect ratio
    function setCardHeight() {
      const cards = document.querySelectorAll('.staff-card');
      cards.forEach(card => {
        const width = card.offsetWidth;
        card.style.height = `${(width * 16) / 9}px`;
      });
    }

    // Set initial height and update on resize
    window.addEventListener('load', setCardHeight);
    window.addEventListener('resize', setCardHeight);

    return () => {
      window.removeEventListener('load', setCardHeight);
      window.removeEventListener('resize', setCardHeight);
    };
  }, []);

  const teamMembers = [
    { role: 'President', name: 'Mobina', image: '/staff_pps/photo1.jpg', bio: 'President bio here.' },
    { role: 'Vice-President', name: 'William Saeys', image: '/staff_pps/photo2.jpg', bio: 'Vice-President bio here.' },
    { role: 'Finance Manager', name: 'Nischal Chitrakar', image: '/staff_pps/photo3.jpg', bio: 'Finance Manager bio here.' },
    { role: 'Events Manager', name: 'Anis Dhewaju', image: '/staff_pps/photo4.jpg', bio: 'Events Manager bio here.' },
    { role: 'HR Manager', name: 'Michelle', image: '/staff_pps/photo5.jpg', bio: 'HR Manager bio here.' },
    { role: 'Marketing Manager', name: 'Daniel Sie', image: '/staff_pps/kim.png', bio: 'Marketing Manager bio here.' },
    { role: '???', name: 'Masahito', image: '/staff_pps/photo6.jpg', bio: 'Marketing  bio here.' },
    { role: '???', name: 'Jannah', image: '/staff_pps/photo7.jpg', bio: 'Marketing  bio here.' },
    { role: '???', name: 'Alexis', image: '/staff_pps/photo8.jpg', bio: 'Marketing  bio here.' },
    { role: '???', name: 'Emily', image: '', bio: 'Marketing  bio here.' },
    { role: '???', name: 'Sunnisa', image: '', bio: 'Marketing  bio here.' },
    { role: '???', name: 'Tenzin Tashidelek X', image: '', bio: 'Marketing  bio here.' },
  ];

  return (
    <main className="App-main">
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="section-description">
            <p>Our dedicated team members work tirelessly to bring you the best experiences and events.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="staff-card" key={index}>
                <div className="card-inner">
                  <div className="card-front">
                    <img src={member.image} alt={`${member.name}`} />
                  </div>
                  <div className="card-back">
                    <h3>{member.role}</h3>
                    <p>{member.name}</p>
                    <p className="bio">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;
