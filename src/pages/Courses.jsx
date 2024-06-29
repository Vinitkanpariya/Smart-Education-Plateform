import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import profilePic2 from '../images/pic-2.jpg';
import profilePic3 from '../images/pic-3.jpg';
import profilePic4 from '../images/pic-4.jpg';
import profilePic5 from '../images/pic-5.jpg';
import profilePic6 from '../images/pic-6.jpg';
import profilePic7 from '../images/pic-7.jpg';
import profilePic8 from '../images/pic-8.jpg';
import profilePic9 from '../images/pic-9.jpg';
import thumb1 from '../images/thumb-1.png';
import thumb2 from '../images/thumb-2.png';
import thumb3 from '../images/thumb-3.png';
import thumb4 from '../images/thumb-4.png';
import thumb5 from '../images/thumb-5.png';
import thumb6 from '../images/thumb-6.png';
import thumb7 from '../images/thumb-7.png';
import thumb8 from '../images/thumb-8.png';
import thumb9 from '../images/thumb-9.png';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Courses = () => {
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
            <section className="courses">
                <h1 className="heading">our courses</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic2} alt="" />
                            <div className="info">
                                <h3>Ramesh Shrivastav</h3>
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
                                <h3>Ramesh Shrivastav</h3>
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
                                <h3>Ramesh Shrivastav</h3>
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
                                <h3>Ramesh Shrivastav</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb4} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete Bootstrap tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>

                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic6} alt="" />
                            <div className="info">
                                <h3>Ramesh Shrivastav</h3>
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
                                <h3>Ramesh Shrivastav</h3>
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

                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic8} alt="" />
                            <div className="info">
                                <h3>Ramesh Shrivastav</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb7} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete PHP tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>

                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic9} alt="" />
                            <div className="info">
                                <h3>Ramesh Shrivastav</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb8} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete MySQL tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>

                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic1} alt="" />
                            <div className="info">
                                <h3>Ramesh Shrivastav</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <img src={thumb9} alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">complete React tutorial</h3>
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Courses;
