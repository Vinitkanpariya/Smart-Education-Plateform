import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';
const UpdateProfile = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [name, setName] = useState(' Krishna Tiwari');
    const [email, setEmail] = useState('shaikh@gmail.com');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);

 
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


    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleProfilePicChange = (e) => setProfilePic(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
        console.log('Profile Pic:', profilePic);
    };

    return (
        <>
        <Navbar 
                toggleSidebar={toggleSidebar}
                toggleProfile={toggleProfile}
                toggleDarkMode={toggleDarkMode}
            />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <section className="form-container">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>update profile</h3>
                    <p>update name</p>
                    <input type="text" name="name" placeholder=" Krishna Tiwari" maxLength="50" className="box" value={name} onChange={handleNameChange} />
                    <p>update email</p>
                    <input type="email" name="email" placeholder="shaikh@gmail.com" maxLength="50" className="box" value={email} onChange={handleEmailChange} />
                    <p>previous password</p>
                    <input type="password" name="old_pass" placeholder="enter your old password" maxLength="20" className="box" value={oldPassword} onChange={handleOldPasswordChange} />
                    <p>new password</p>
                    <input type="password" name="new_pass" placeholder="enter your new password" maxLength="20" className="box" value={newPassword} onChange={handleNewPasswordChange} />
                    <p>confirm password</p>
                    <input type="password" name="c_pass" placeholder="confirm your new password" maxLength="20" className="box" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <p>update pic</p>
                    <input type="file" accept="image/*" className="box" onChange={handleProfilePicChange} />
                    <input type="submit" value="update profile" name="submit" className="btn" />
                </form>
            </section>

            <Footer/>
        </>
    );
};

export default UpdateProfile;
