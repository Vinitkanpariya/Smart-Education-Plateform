import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import profilePic2 from '../images/pic-2.jpg';
import thumb1 from '../images/thumb-1.png';
import post1 from '../images/post-1-1.png';
import post2 from '../images/post-1-2.png';
import post3 from '../images/post-1-3.png';
import post4 from '../images/post-1-4.png';
import post5 from '../images/post-1-5.png';
import post6 from '../images/post-1-6.png';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Playlist = () => {
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
            <section className="playlist-details">
                <h1 className="heading">playlist details</h1>
                <div className="row">
                    <div className="column">
                        <form action="" method="post" className="save-playlist">
                            <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
                        </form>
                        <div className="thumb">
                            <img src={thumb1} alt="Playlist Thumbnail" />
                            <span>10 videos</span>
                        </div>
                    </div>
                    <div className="column">
                        <div className="tutor">
                            <img src={profilePic2} alt="Tutor" />
                            <div>
                                <h3>Ramesh Shrivastav</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>
                        <div className="details">
                            <h3>complete HTML tutorial</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
                            <Link to="/tutor-profile" className="inline-btn">view profile</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="playlist-videos">
                <h1 className="heading">playlist videos</h1>
                <div className="box-container">
                    <Link className="box" to="/ watch">
                        <i className="fas fa-play"></i>
                        <img src={post1} alt="Video Thumbnail" />
                        <h3>complete HTML tutorial (part 01)</h3>
                    </Link>
                    <Link className="box" to="/watch">
                        <i className="fas fa-play"></i>
                        <img src={post2} alt="Video Thumbnail" />
                        <h3>complete HTML tutorial (part 02)</h3>
                    </Link>
                    <Link className="box" to="/watch">
                        <i className="fas fa-play"></i>
                        <img src={post3} alt="Video Thumbnail" />
                        <h3>complete HTML tutorial (part 03)</h3>
                    </Link>
                    <Link className="box" to="/watch">
                        <i className="fas fa-play"></i>
                        <img src={post4} alt="Video Thumbnail" />
                        <h3>complete HTML tutorial (part 04)</h3>
                    </Link>
                    <Link className="box" to="/watch">
                        <i className="fas fa-play"></i>
                        <img src={post5} alt="Video Thumbnail" />
                        <h3>complete HTML tutorial (part 05)</h3>
                    </Link>
                    <Link className="box" to="/watch">
                        <i className="fas fa-play"></i>
                        <img src={post6} alt="Video Thumbnail" />
                        <h3>complete HTML tutorial (part 06)</h3>
                    </Link>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Playlist;
