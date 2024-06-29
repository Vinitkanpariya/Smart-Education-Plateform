import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../images/pic-1.jpg';
import profilePic2 from '../images/pic-2.jpg';
import pic3 from '../images/pic-3.jpg';
import pic4 from '../images/pic-4.jpg';
import pic5 from '../images/pic-5.jpg';
import vid1 from '../images/vid-1.mp4';
import post1 from '../images/post-1-1.png';
import Navbar from '../comon/Navbar';
import Footer from '../comon/Footer';
import Sidebar from '../comon/Sidebar';

const Watch = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, user: ' Krishna Tiwari', date: '22-10-2022', text: 'this is a comment form  Krishna Tiwari', img: profilePic1 },
        { id: 2, user: 'Ramesh Shrivastav', date: '22-10-2022', text: 'awesome tutorial! keep going!', img: profilePic2 },
        { id: 3, user: 'Ramesh Shrivastav', date: '22-10-2022', text: 'amazing way of teaching! thank you so much!', img: pic3 },
        { id: 4, user: 'Ramesh Shrivastav', date: '22-10-2022', text: 'loved it, thanks for the tutorial!', img: pic4 },
        { id: 5, user: 'Ramesh Shrivastav', date: '22-10-2022', text: 'this is what I have been looking for! thank you so much!', img: pic5 },
        { id: 6, user: 'Ramesh Shrivastav', date: '22-10-2022', text: 'thanks for the tutorial! how to download source code file?', img: profilePic2 }
    ]);

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


    const handleAddComment = (e) => {
        e.preventDefault();
        const newComment = {
            id: comments.length + 1,
            user: ' Krishna Tiwari',
            date: new Date().toLocaleDateString(),
            text: e.target.comment_box.value,
            img: profilePic1
        };
        setComments([...comments, newComment]);
        e.target.comment_box.value = '';
    };

    return (
        
        <>
        <Navbar 
                toggleSidebar={toggleSidebar}
                toggleProfile={toggleProfile}
                toggleDarkMode={toggleDarkMode}
            />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <section className="watch-video">
                <div className="video-container">
                    <div className="video">
                        <video src={vid1} controls poster={post1} id="video"></video>
                    </div>
                    <h3 className="title">complete HTML tutorial (part 01)</h3>
                    <div className="info">
                        <p className="date"><i className="fas fa-calendar"></i><span>22-10-2022</span></p>
                        <p className="date"><i className="fas fa-heart"></i><span>44 likes</span></p>
                    </div>
                    <div className="tutor">
                        <img src={profilePic2} alt="" />
                        <div>
                            <h3>Ramesh Shrivastav</h3>
                            <span>developer</span>
                        </div>
                    </div>
                    <form action="" method="post" className="flex">
                        <Link to="/playlist" className="inline-btn">view playlist</Link>
                        <button><i className="far fa-heart"></i><span>like</span></button>
                    </form>
                    <p className="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
                    </p>
                </div>
            </section>

            <section className="comments">
                <h1 className="heading">5 comments</h1>
                <form onSubmit={handleAddComment} className="add-comment">
                    <h3>add comments</h3>
                    <textarea name="comment_box" placeholder="enter your comment" required maxLength="1000" cols="30" rows="10"></textarea>
                    <input type="submit" value="add comment" className="inline-btn" name="add_comment" />
                </form>
                <h1 className="heading">user comments</h1>
                <div className="box-container">
                    {comments.map((comment) => (
                        <div className="box" key={comment.id}>
                            <div className="user">
                                <img src={comment.img} alt={comment.user} />
                                <div>
                                    <h3>{comment.user}</h3>
                                    <span>{comment.date}</span>
                                </div>
                            </div>
                            <div className="comment-box">{comment.text}</div>
                            <form action="" className="flex-btn">
                                <input type="submit" value="edit comment" name="edit_comment" className="inline-option-btn" />
                                <input type="submit" value="delete comment" name="delete_comment" className="inline-delete-btn" />
                            </form>
                        </div>
                    ))}
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Watch;
