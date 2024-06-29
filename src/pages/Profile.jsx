import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Profile = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleProfile = () => {
        setProfileOpen(!isProfileOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    };


    return (
        <>
        <Navbar 
                toggleSidebar={toggleSidebar}
                toggleProfile={toggleProfile}
                toggleDarkMode={toggleDarkMode}
            />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <section className="user-profile">
                <h1 className="heading">your profile</h1>
                <div className="info">
                    <div className="user">
                        <img src={profilePic1} alt="Profile" />
                        <h3> Krishna Tiwari</h3>
                        <p>student</p>
                        <Link to="/update" className="inline-btn">update profile</Link>
                    </div>
                    <div className="box-container">
                        <div className="box">
                            <div className="flex">
                                <i className="fas fa-bookmark"></i>
                                <div>
                                    <span>4</span>
                                    <p>saved playlist</p>
                                </div>
                            </div>
                            <Link to="#" className="inline-btn">view playlists</Link>
                        </div>
                        <div className="box">
                            <div className="flex">
                                <i className="fas fa-heart"></i>
                                <div>
                                    <span>33</span>
                                    <p>videos liked</p>
                                </div>
                            </div>
                            <Link to="#" className="inline-btn">view liked</Link>
                        </div>
                        <div className="box">
                            <div className="flex">
                                <i className="fas fa-comment"></i>
                                <div>
                                    <span>12</span>
                                    <p>videos comments</p>
                                </div>
                            </div>
                            <Link to="#" className="inline-btn">view comments</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Profile;
