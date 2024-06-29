import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';
import { auth, db } from "../Firebase/";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [error, setError] = useState(""); // State variable for error message
    const navigate = useNavigate();

    const toggleProfile = () => {
        setProfileOpen(!isProfileOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Fetch additional user data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                localStorage.setItem('cName', userData.cName || '');
                localStorage.setItem('photoURL', userData.photoURL || '');
            }

            localStorage.setItem('email', user.email);
            localStorage.setItem('uid', user.uid);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
            setError("Invalid email or password. Please try again."); // Set error message
        }
    };

    const closePopup = () => {
        setError(""); // Clear error message
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
                <form onSubmit={handleSubmit}>
                    <h3>login now</h3>
                    <p>your email <span>*</span></p>
                    <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box" value={email} onChange={handleEmailChange} />
                    <p>your password <span>*</span></p>
                    <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box" value={password} onChange={handlePasswordChange} />
                    <input type="submit" value="login now" name="submit" className="btn" />
                </form>
                {error && (
                    <div className="error-popup">
                        <div className="error-popup-content">
                            <p>{error}</p>
                            <button onClick={closePopup} className="close-popup-btn">Close</button>
                        </div>
                    </div>
                )}
            </section>
            <Footer/>
        </>
    );
};

export default Login;
