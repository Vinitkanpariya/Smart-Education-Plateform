import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { auth, storage, db } from '../Firebase/';
import Navbar from '../comon/Navbar';
import Sidebar from '../comon/Sidebar';
Footer
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);
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

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleProfilePicChange = (e) => setProfilePic(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Upload profile picture
            let profilePicUrl = '';
            if (profilePic) {
                const profilePicRef = ref(storage, `profilePictures/${user.uid}/${profilePic.name}`);
                await uploadBytes(profilePicRef, profilePic);
                profilePicUrl = await getDownloadURL(profilePicRef);
            }

            // Update user profile
            await updateProfile(user, { displayName: name, photoURL: profilePicUrl });

            // Save user info in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name,
                email,
                profilePic: profilePicUrl,
            });

            // Reset form
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setProfilePic(null);

            alert('Registration successful');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user:', error.message);
        }
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
                    <h3>register now</h3>
                    <p>your name <span>*</span></p>
                    <input type="text" name="name" placeholder="enter your name" required maxLength="50" className="box" value={name} onChange={handleNameChange} />
                    <p>your email <span>*</span></p>
                    <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box" value={email} onChange={handleEmailChange} />
                    <p>your password <span>*</span></p>
                    <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box" value={password} onChange={handlePasswordChange} />
                    <p>confirm password <span>*</span></p>
                    <input type="password" name="c_pass" placeholder="confirm your password" required maxLength="20" className="box" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <p>select profile <span>*</span></p>
                    <input type="file" accept="image/*" required className="box" onChange={handleProfilePicChange} />
                    <input type="submit" value="register now" name="submit" className="btn" />
                </form>
            </section>
            <Footer/>
        </>
    );
};

export default Register;
