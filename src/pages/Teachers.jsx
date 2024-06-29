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
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Teachers = () => {
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
            <section className="teachers">
                <h1 className="heading">expert teachers</h1>
                <form action="" method="post" className="search-tutor">
                    <input type="text" name="search_box" placeholder="search tutors..." required maxLength="100" />
                    <button type="submit" className="fas fa-search" name="search_tutor"></button>
                </form>
                <div className="box-container">
                    <div className="box offer">
                        <h3>become a tutor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
                        <Link to="/register" className="inline-btn">get started</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic2} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic3} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic4} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic5} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic6} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic7} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <img src={profilePic8} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>developer</span>
                            </div>
                        </div>
                        <p>total playlists : <span>4</span></p>
                        <p>total videos : <span>18</span></p>
                        <p>total likes : <span>1208</span></p>
                        <Link to="/teacher_profile" className="inline-btn">view profile</Link>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Teachers;
