import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar, toggleProfile, toggleDarkMode }) => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/home" className="logo">E-Gurukul</Link>
        
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars" onClick={toggleSidebar}></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user" onClick={toggleProfile}></div>
          <div id="toggle-btn" className="fas fa-sun" onClick={toggleDarkMode}></div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
