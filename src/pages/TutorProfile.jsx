import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import profilePic2 from '../images/pic-2.jpg';
import thumb1 from '../images/thumb-1.png';
import thumb2 from '../images/thumb-2.png';
import thumb3 from '../images/thumb-3.png';
import thumb4 from '../images/thumb-4.png';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';
const TutorProfile = () => {
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
            <section className="teacher-profile">
                <h1 className="heading">profile details</h1>
                <div className="details">
                    <div className="tutor">
                        <img src={profilePic2} alt="Tutor" />
                        <h3>john deo</h3>
                        <span>developer</span>
                    </div>
                    <div className="flex">
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <p>total comments : <span>52</span></p>
                    </div>
                </div>
            </section>

            <section className="courses">
                <h1 className="heading">our courses</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="thumb">
                            <img src={thumb1} alt="Course Thumbnail" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete HTML tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>

                    <div className="box">
                        <div className="thumb">
                            <img src={thumb2} alt="Course Thumbnail" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete CSS tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>

                    <div className="box">
                        <div className="thumb">
                            <img src={thumb3} alt="Course Thumbnail" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete javascript tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>

                    <div className="box">
                        <div className="thumb">
                            <img src={thumb4} alt="Course Thumbnail" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete Boostrap tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default TutorProfile;
