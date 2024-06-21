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
    faCirclePlay
  } from '@fortawesome/free-solid-svg-icons';

function Library() {

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

      // Base URL for the Podcast Index API
//   const baseUrl = 'https://api.podcastindex.org/api/1.0';
//   // Example endpoint: Search for a podcast by term
//   const endpoint = '/search/byterm';
//   // Query parameters
//   const params = new URLSearchParams({
//     q: 'technology' // Example search term
//   });
//   // Full URL with endpoint and query parameters
//   const url = `${baseUrl}${endpoint}?${params.toString()}`;

//   const [query, setQuery] = useState("")
//   // create a handler function for search bar and update the state
//   const handleInputChange = (e) => {
//     setQuery(e.target.value)
//     // use fetch hook for state changes
    
//   }
  // create a handler function that calls the fetch request to the api when the uer presses the 'enter' key
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetch(url, {
//         method: "GET",
//         headers: {
//           'X-Auth-Key': process.env.REACT_APP_API_KEY,
//           'X-Auth-Secret': process.env.REACT_REACT_API_SECRET_KEY,
//           "content-type": "application/json"
//         }
//       })
//         .then((response) => response.json())
//         .then(result => console.log(result.data))
//         .catch((error) => console.log('Error fetching data: ', error))
//     }
//   }
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
                            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                            <span className="link-name">Home</span>
                        </Link></li>
                        <li><Link to='/signup'>
                            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                            <span className="link-name">Signup</span>
                        </Link></li>
                        <li><Link to="">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                            <span className="link-name">Settings</span>
                        </Link></li>
                        <li><Link to='/discover'>
                            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                            <span className="link-name">Discover</span>
                        </Link></li>
                    </ul>

                    <ul className="logout">
                        <li><Link to="">
                            <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                            <span className="link-name">Logout</span>
                        </Link></li>
                    </ul>
                </div>
            </nav>

            {/* <!--MAIN CONTENT SECTION--> */}
            <section className="playlist">
                <div className="top">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>

                    <div className="search-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        <input type="text" placeholder="Search Here...." />
                    </div>

                    <FontAwesomeIcon icon={faCircleUser} id="user-profile"></FontAwesomeIcon>
                </div>

                <div className="playlist-activity">
                    <div className="title">
                        <span className="text">Playlist Activity</span>
                        <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>
                    </div>

                    <div className="playlist-data">
                        <div className="data-names">
                            <span className="data-title">Podcast</span>
                            <span className="data-list">Joe Rogan Podcast</span>
                        </div>
                        <div className="data-episode">
                            <span className="data-title">Episode</span>
                            <span className="data-list">09</span>
                        </div>
                        <div className="data-genre">
                            <span className="data-title">Genre</span>
                            <span className="data-list">Politics</span>
                        </div>
                        <div className="data-status">
                            <span className="data-title">Status</span>
                            <span className="data-list">Saved</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Library;