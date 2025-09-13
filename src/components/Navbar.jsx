import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="brand">
        <div className="brand-title">Tier3 Talent Hub</div>
        <div className="brand-subtitle">Master Everything</div>
      </div>
      <ul className="nav-links">
        <li>DevOps</li>
        <li>Development</li>
        <li>RoadMaps</li>
        <li>Practice</li>
      </ul>
      <div className="search-icon">
        🔍
      </div>
    </nav>
  );
};

export default Navbar;
