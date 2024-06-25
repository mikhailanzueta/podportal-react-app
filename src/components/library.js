import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import './library.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faUserPlus,
    faGear,
    faBookmark,
    faArrowRightFromBracket,
    faBars,
    faMagnifyingGlass,
    faCircleUser,
  } from '@fortawesome/free-solid-svg-icons';

function Library() {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        // This function runs after the component is mounted
        const handleClick = () => {
            const bars = document.querySelector('.fa-bars');
            const sideMenu = document.querySelector('.navigation');
            
            // Toggle the "close" class on .navigation when .fa-bars is clicked
            bars.addEventListener('click', () => {
                sideMenu.classList.toggle("close");
            });
        };
        // Call the function to set up event listener
        handleClick();
        // Empty dependency array ensures this effect runs only once after initial render
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreatePlaylist = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.description.value)

        const body = {
            name: e.target.name.value,
            description: e.target.description.value
        }

            fetch('http://localhost:3000/playlist/create', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if(result.statusCode === 200) {
                    console.log('Playlist created!')
                    return result
                } else {
                    console.log('Something went wrong')
                }
            })
            .catch((error) => console.log("There was a problem fetching the data:", error))
       
    }

    
    return (
        <div>
            <nav className="navigation">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src="images\podcast.svg" alt="Podportal" />
                    </div>

                    <span className="logo_name">Podportal</span>
                </div>

                <div className="menu-items">
                    <ul className="nav-links">
                        <li><Link to='/home'>
                            <FontAwesomeIcon icon={faHouse} className="icon"></FontAwesomeIcon>
                            <span className="link-name">Home</span>
                        </Link></li>
                        <li><Link to='/signup'>
                            <FontAwesomeIcon icon={faUserPlus} className="icon"></FontAwesomeIcon>
                            <span className="link-name">Signup</span>
                        </Link></li>
                        <li><Link to="">
                            <FontAwesomeIcon icon={faGear} className="icon"></FontAwesomeIcon>
                            <span className="link-name">Settings</span>
                        </Link></li>
                        <li><Link to='/discover'>
                            <FontAwesomeIcon icon={faBookmark} className="icon"></FontAwesomeIcon>
                            <span className="link-name">Discover</span>
                        </Link></li>
                    </ul>

                    <ul className="logout">
                        <li><Link to="">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon"></FontAwesomeIcon>
                            <span className="link-name">Logout</span>
                        </Link></li>
                    </ul>
                </div>
            </nav>

            {/* <!--MAIN CONTENT SECTION--> */}
            <section className="playlist">
                <div className="top">
                    <FontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>

                    <div className="search-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"></FontAwesomeIcon>
                        <input type="text" placeholder="Search Here...." />
                    </div>

                    <FontAwesomeIcon icon={faCircleUser} id="user-profile" className="icon"></FontAwesomeIcon>
                </div>


                
                    <div className="playlist-container">
                        <h2>Create a New Playlist</h2>
                        <form id="playlistForm" onSubmit={handleCreatePlaylist}>
                            <div className="form-group" >
                                <label for="name">Playlist Name:</label>
                                <input type="text" id="name" name="name"  required />
                            </div>
                            <div className="form-group">
                                <label for="description">Description:</label>
                                <textarea id="description" name="description"  required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" >Create Playlist</button>
                            </div>
                        </form>
                    </div>
                    
            </section>
        </div>
    )
}

export default Library;