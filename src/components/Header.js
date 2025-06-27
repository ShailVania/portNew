import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/">Your Name</Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" className={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/resume" className={isActive('/resume')} onClick={() => setIsMenuOpen(false)}>Resume</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
