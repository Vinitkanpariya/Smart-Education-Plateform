import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import profilePic2 from '../images/pic-2.jpg';
import profilePic3 from '../images/pic-3.jpg';
import profilePic4 from '../images/pic-4.jpg';
import profilePic5 from '../images/pic-5.jpg';
import profilePic6 from '../images/pic-6.jpg';
import profilePic7 from '../images/pic-7.jpg';
import thumb1 from '../images/thumb-1.png';
import thumb2 from '../images/thumb-2.png';
import thumb3 from '../images/thumb-3.png';
import thumb4 from '../images/thumb-4.png';
import thumb5 from '../images/thumb-5.png';
import thumb6 from '../images/thumb-6.png';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Home = () => {
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

            {isProfileOpen && (
                <div className="profile">
                    <img src={profilePic1} className="image" alt="" />
                    <h3 className="name">shaikh anas</h3>
                    <p className="role">student</p>
                    <Link to="/profile" className="btn">view profile</Link>
                    <div className="flex-btn">
                        <Link to="/login" className="option-btn">login</Link>
                        <Link to="/register" className="option-btn">register</Link>
                    </div>
                </div>
            )}

            <section className="home-grid">
                <h1 className="heading">quick options</h1>
                <div className="box-container">
                    <div className="box">
                        <h3 className="title">likes and comments</h3>
                        <p className="likes">total likes : <span>25</span></p>
                        <a href="#" className="inline-btn">view likes</a>
                        <p className="likes">total comments : <span>12</span></p>
                        <a href="#" className="inline-btn">view comments</a>
                        <p className="likes">saved playlists : <span>4</span></p>
                        <a href="#" className="inline-btn">view playlists</a>
                    </div>
                    <div className="box">
                        <h3 className="title">top categories</h3>
                        <div className="flex">
                            <a href="#"><i className="fas fa-code"></i><span>development</span></a>
                            <a href="#"><i className="fas fa-chart-simple"></i><span>business</span></a>
                            <a href="#"><i className="fas fa-pen"></i><span>design</span></a>
                            <a href="#"><i className="fas fa-chart-line"></i><span>marketing</span></a>
                            <a href="#"><i className="fas fa-music"></i><span>music</span></a>
                            <a href="#"><i className="fas fa-camera"></i><span>photography</span></a>
                            <a href="#"><i className="fas fa-cog"></i><span>software</span></a>
                            <a href="#"><i className="fas fa-vial"></i><span>science</span></a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="title">popular topics</h3>
                        <div className="flex">
                            <a href="#"><i className="fab fa-html5"></i><span>HTML</span></a>
                            <a href="#"><i className="fab fa-css3"></i><span>CSS</span></a>
                            <a href="#"><i className="fab fa-js"></i><span>javascript</span></a>
                            <a href="#"><i className="fab fa-react"></i><span>react</span></a>
                            <a href="#"><i className="fab fa-php"></i><span>PHP</span></a>
                            <a href="#"><i className="fab fa-bootstrap"></i><span>bootstrap</span></a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="title">become a tutor</h3>
                        <p className="tutor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
                        <Link to="/teachers" className="inline-btn">get started</Link>
                    </div>
                </div>
            </section>

            <section className="courses">
                <h1 className="heading">our courses</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic2} alt="" />
                            <div className="info">
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb1} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete HTML tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic3} alt="" />
                            <div className="info">
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb2} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete CSS tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic4} alt="" />
                            <div className="info">
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb3} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete JS tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic5} alt="" />
                            <div className="info">
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb4} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete Boostrap tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic6} alt="" />
                            <div className="info">
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb5} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete JQuery tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic7} alt="" />
                            <div className="info">
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb6} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete SASS tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                </div>
                <div className="more-btn">
                    <Link to="/courses" className="inline-option-btn">view all courses</Link>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
