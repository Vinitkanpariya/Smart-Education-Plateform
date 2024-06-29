import React from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`side-bar ${isOpen ? 'active' : ''}`}>
      <div id="close-btn" onClick={toggleSidebar}>
        <i className="fas fa-times"></i>
      </div>
      <div className="profile">
        <img src={profilePic1} className="image" alt="" />
        <h3 className="name">Krishna Tiwari</h3>
        <p className="role">student</p>
        <Link to="/profile" className="btn">view profile</Link>
      </div>
      <nav className="navbar">
        <Link to="/home"><i className="fas fa-home"></i><span>Home</span></Link>
        <Link to="/about"><i className="fas fa-question"></i><span>About</span></Link>
        <Link to="/courses"><i className="fas fa-graduation-cap"></i><span>Courses</span></Link>
        <Link to="/teachers"><i className="fas fa-chalkboard-user"></i><span>Teacher Dashboard</span></Link>
        <Link to="/contact"><i className="fas fa-headset"></i><span>Contact Us</span></Link>
      </nav>
    </div>
  );
};

export default Sidebar;
