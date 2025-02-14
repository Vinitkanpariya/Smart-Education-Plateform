import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../images/about-img.svg';
import profilePic1 from '../images/pic-1.jpg';
import profilePic2 from '../images/pic-2.jpg';
import profilePic3 from '../images/pic-3.jpg';
import profilePic4 from '../images/pic-4.jpg';
import profilePic5 from '../images/pic-5.jpg';
import profilePic6 from '../images/pic-6.jpg';
import profilePic7 from '../images/pic-7.jpg';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const About = () => {
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
    }
    return (
        <>
          <Navbar 
                toggleSidebar={toggleSidebar}
                toggleProfile={toggleProfile}
                toggleDarkMode={toggleDarkMode}
            />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <section className="about">
                <div className="row">
                    <div className="image">
                        <img src={aboutImg} alt="About Us" />
                    </div>
                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
                        <Link to="/courses" className="inline-btn">our courses</Link>
                    </div>
                </div>

                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <div>
                            <h3>+10k</h3>
                            <p>online courses</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-user-graduate"></i>
                        <div>
                            <h3>+40k</h3>
                            <p>brilliant students</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-chalkboard-user"></i>
                        <div>
                            <h3>+2k</h3>
                            <p>expert tutors</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-briefcase"></i>
                        <div>
                            <h3>100%</h3>
                            <p>job placement</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews">
                <h1 className="heading">student's reviews</h1>
                <div className="box-container">
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div className="student">
                            <img src={profilePic2} alt="" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div className="student">
                            <img src={profilePic3} alt="" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div className="student">
                            <img src={profilePic4} alt="" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div className="student">
                            <img src={profilePic5} alt="" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div className="student">
                            <img src={profilePic6} alt="" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div className="student">
                            <img src={profilePic7} alt="" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          <Footer/>
        </>
    );
};

export default About;
