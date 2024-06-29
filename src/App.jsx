import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Playlist from './pages/Playlist';
import Watch from './pages/Watch';
import UpdateProfile from './pages/UpdateProfile';
import TutorProfile from './pages/TutorProfile';
// index.js or App.js

import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tutor-profile" element={<TutorProfile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
