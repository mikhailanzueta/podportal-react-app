import React from "react";
import { useEffect, useState } from "react";
// import {handleInputChange, handleKeyPress} from '../App'
import { useNavigate, Link } from "react-router-dom";
import './discover.css'
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
    faRadio,
    faMicrochip,
    faLandmark,
    faDumbbell,
    faFaceGrinTears,
    faAtom,
    faMedal,
    faBook,
    faMusic,
    faPodcast,
    faHandcuffs,
  } from '@fortawesome/free-solid-svg-icons';

function Discover ({hash4Header, apiHeaderTime}) {
    const navigate = useNavigate()

    const handleLogout = () => {

        fetch(`http://localhost:3000/logout`, {
          method: "POST",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('User is logged out')
                localStorage.removeItem('user')
                navigate('/home')
            })
            .catch((error) => console.log('There was a problem logging out the user: ', error))
        
    }

    const handleData = () => {
        fetch(`http://localhost:3000/discover/podcasts`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('result: ', result)
            })
            .catch((error) => console.log('Could not fetch your podcasts', error))
    }

   
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
                        <li><Link to="/home">
                            <FontAwesomeIcon icon={faHouse} className="icon" />
                            <span className="link-name">Home</span>
                        </Link></li>
                        <li><Link to="/signup">
                            <FontAwesomeIcon icon={faUserPlus} className="icon" />
                            <span className="link-name">Signup</span>
                        </Link></li>
                        <li><Link to="">
                            <FontAwesomeIcon icon={faGear} className="icon" />
                            <span className="link-name">Settings</span>
                        </Link></li>
                        <li><Link to="/library">
                            <FontAwesomeIcon icon={faBookmark} className="icon" />
                            <span className="link-name">Library</span>
                        </Link></li>
                    </ul>

                    <ul className="logout">
                        <li><Link to="/home" onClick={handleLogout}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
                            <span className="link-name">Logout</span>
                        </Link></li>
                    </ul>
                </div>
             </nav>

            {/* <!--MAIN CONTENT SECTION--> */}
            <section className="discover">
                <div className="top">
                    <FontAwesomeIcon icon={faBars} className="fa-bars" />

                    <div className="search-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                        <input type="text" placeholder="Search Here...." />
                    </div>

                    <FontAwesomeIcon icon={faCircleUser} id="user-profile" className="icon" />
                </div>

                <div className="discover-content">
                    <div className="overview">
                        <div className="title">
                            <span className="text">Discover</span>
                            <FontAwesomeIcon icon={faRadio} className="icon" />
                        </div>

                        <div className="genre-boxes">
                            <a href="test.html" className="genre box-1" id="1">
                                <FontAwesomeIcon icon={faMicrochip} />
                                <span className="text">Test</span>
                            </a>
                            <a href="#" className="genre box-2">
                                <FontAwesomeIcon icon={faLandmark} />
                                <span className="text">Politics</span>
                            </a>
                            <a href="#" className="genre box-3">
                                <FontAwesomeIcon icon={faDumbbell} />
                                <span className="text">Health</span>
                            </a>
                            <a href="#" className="genre box-4">
                                <FontAwesomeIcon icon={faFaceGrinTears} />
                                <span className="text">Comedy</span>
                            </a>
                            <a href="#" className="genre box-5">
                                <FontAwesomeIcon icon={faAtom} />
                                <span className="text">Science</span>
                            </a>
                            <a href="#" className="genre box-6">
                                <FontAwesomeIcon icon={faMedal} />
                                <span className="text">Sports</span>
                            </a>
                            <a href="#" className="genre box-7">
                                <FontAwesomeIcon icon={faMedal} />
                                <span className="text">Lifestyle</span>
                            </a>
                            <a href="#" className="genre box-8">
                                <FontAwesomeIcon icon={faBook} />
                                <span className="text">Stories</span>
                            </a>
                            <a href="#" className="genre box-9">
                                <FontAwesomeIcon icon={faMusic} />
                                <span className="text">Music</span>
                            </a>
                            <a href="#" className="genre box-10">
                                <FontAwesomeIcon icon={faPodcast} />
                                <span className="text">New Releases</span>
                            </a>
                            <a href="#" className="genre box-11">
                                <FontAwesomeIcon icon={faHandcuffs} />
                                <span className="text">Crime</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Discover;