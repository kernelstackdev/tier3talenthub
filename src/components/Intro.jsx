import React from 'react';
import '../styles/Intro.css';

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <h2>Welcome to Tier-3 Talent Hub</h2>
          <ul className="intro-points">
            <li>Tier-3 Talent Hub is a place for students and tech enthusiasts from smaller towns and colleges to learn, grow, and showcase their skills.</li>
            <li>We provide resources, guidance, and opportunities to help everyone reach their potential.</li>
            <li>Our belief is simple: talent has no tier, and opportunity should not either.</li>
          </ul>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Software development" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
