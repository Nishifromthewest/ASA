import React from 'react';

function InstagramFeed() {
  // Sample Instagram posts data - you can replace with real Instagram API data
  const instagramPosts = [
    {
      id: 1,
      image: '/api/placeholder/300/300',
      caption: 'ASA Karaoke Night 🎤 Amazing voices and great vibes!',
      likes: 124,
      isVideo: false
    },
    {
      id: 2,
      image: '/api/placeholder/300/300', 
      caption: 'Traditional Asian cooking workshop 🥢 Learning authentic recipes!',
      likes: 89,
      isVideo: true
    },
    {
      id: 3,
      image: '/api/placeholder/300/300',
      caption: 'ASA On Ice ⛸️ Winter fun with our amazing community!',
      likes: 156,
      isVideo: false
    },
    {
      id: 4,
      image: '/api/placeholder/300/300',
      caption: 'Cultural festival preparation 🎊 Getting ready for our biggest event!',
      likes: 203,
      isVideo: true
    },
    {
      id: 5,
      image: '/api/placeholder/300/300',
      caption: 'ASA Café meetup ☕ Great conversations and new friendships!',
      likes: 78,
      isVideo: false
    },
    {
      id: 6,
      image: '/api/placeholder/300/300',
      caption: 'Team building activities 🤝 Strengthening our ASA family!',
      likes: 134,
      isVideo: false
    }
  ];

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="instagram-header">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-description">
            Stay updated with our latest events, activities, and community moments!
          </p>
          <a 
            href="https://instagram.com/asaantwerpen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-handle"
          >
            📸 @asa_antwerpen
          </a>
        </div>
        
        <div className="instagram-grid">
          {instagramPosts.map(post => (
            <div key={post.id} className="instagram-post">
              <div className="post-image-container">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="post-image"
                />
                {post.isVideo && (
                  <div className="video-indicator">
                    <span className="play-icon">▶</span>
                  </div>
                )}
                <div className="post-overlay">
                  <div className="post-stats">
                    <span className="likes">❤️ {post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="instagram-cta">
          <a 
            href="https://instagram.com/asa_antwerpen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-follow-btn"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstagramFeed;
