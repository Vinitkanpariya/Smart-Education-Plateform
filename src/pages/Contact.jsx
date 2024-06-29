import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactImg from '../images/contact-img.svg';
import profilePic1 from '../images/pic-1.jpg';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Contact = () => {


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
            <section className="contact">
                <div className="row">
                    <div className="image">
                        <img src={contactImg} alt="Contact Us" />
                    </div>
                    <form action="" method="post">
                        <h3>get in touch</h3>
                        <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" />
                        <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" />
                        <input type="number" placeholder="enter your number" name="number" required maxLength="50" className="box" />
                        <textarea name="msg" className="box" placeholder="enter your message" required maxLength="1000" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" className="inline-btn" name="submit" />
                    </form>
                </div>

                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <h3>phone number</h3>
                        <a href="tel:79840876910">7984087691</a>
                        <a href="tel:9913884150">9913884150</a>
                      
                    </div>
                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <h3>email address</h3>
                        <a href="mailto:shaikhanas@gmail.com">ravi@gmail.com</a>
                    
                    </div>
                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>office address</h3>
                        <a href="#">Thaltej ,Ahmedabad,Gujarat</a>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Contact;
