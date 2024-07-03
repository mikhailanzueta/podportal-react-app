import React from "react";
import { useEffect, useState, useRef } from "react";
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
    faCirclePlay,
    faXmark,
    faPlus
  } from '@fortawesome/free-solid-svg-icons';

function Discover ({hash4Header, apiHeaderTime}) {
    const [randomPodcasts, setRandomPodcasts] = useState([]);
    const [currentAudioUrl, setCurrentAudioUrl] = useState('')
    const [menuToggle, setMenuToggle] = useState(false)
    const audioPlayerRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://personal-project-podportal-1.onrender.com/')
        .then((response) => response.json())
        .then((data) => {
            console.log('Random Podcasts:', data);
            setRandomPodcasts(data.data); // Set the fetched random podcasts to state
        })
        .catch((error) => console.error('Could not fetch your podcasts', error));
    }, []); 

   
    useEffect(() => {
        console.log('state changed')
    },[menuToggle])
    // This function runs after the component is mounted
    const handleClick = () => {
        
        const bars = document.querySelector('.fa-bars');
        const sideMenu = document.querySelector('.navigation');
        
        // Toggle the "close" class on .navigation when .fa-bars is clicked
        bars.addEventListener('click', () => {
            sideMenu.classList.toggle("close");
            setMenuToggle(!menuToggle)
        });
    };

    const handlePodcastClick = (enclosureUrl) => {
        if (currentAudioUrl === enclosureUrl) {
          // If the same podcast is clicked, toggle play/pause
          if (audioPlayerRef.current.paused) {
            audioPlayerRef.current.play();
          } else {
            audioPlayerRef.current.pause();
          }
        } else {
          // If a different podcast is clicked, update the URL
          setCurrentAudioUrl(enclosureUrl);
        }
      };
    
      useEffect(() => {
        if (audioPlayerRef.current && currentAudioUrl) {
          audioPlayerRef.current.src = currentAudioUrl;
          audioPlayerRef.current.play();
        }
      }, [currentAudioUrl]);
    
      const handleAudioEnded = () => {
        setCurrentAudioUrl(null);
      }

      // functionality for 'add' button to add podcasts to playlist:
    const handleAddToPlaylist = async (playlistId, podcastId) => {
        try {
            const response = await fetch(`https://personal-project-podportal-1.onrender.com/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            
            });
            console.log(response)
            console.log("Playlist id: ", playlistId)
            console.log("Podcast id: ", podcastId)
            if (!response.ok) {
                throw new Error('Response was not ok');
            }
    
            const data = await response.json();
            console.log('Podcast added to playlist:', data);
            // Optionally, update the UI to show the podcast was added
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };  

    
    

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
                        <li><Link to="/home">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
                            <span className="link-name">Logout</span>
                        </Link></li>
                    </ul>
                </div>
             </nav>

            {/* <!--MAIN CONTENT SECTION--> */}
            <section className="discover">
                <div className="top">
                    <FontAwesomeIcon icon={faBars} className="fa-bars" onClick={handleClick}/>

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
                            <div className="icon-div">
                                <FontAwesomeIcon icon={faRadio} className="icon" />
                            </div>
                            
                        </div>

            {/* <!--TOP CHARTS PODCAST CONTENT--> */}
            <section className="podcasts" id="podcasts">
                <ul className="podcast-list">
                        {randomPodcasts.slice(6).map((podcast, index) => (
                            <li key={index}>
                                <a href="#" className="podcast-card" onClick={() => handlePodcastClick(podcast.enclosureUrl)}>
                                    <figure className="card-banner">
                                        <img src={podcast.image || podcast.feedImage} alt={`podcast-${index + 6}`} className='card-banner-img' />
                                        <div className="card-banner-icon">
                                            <FontAwesomeIcon icon={faCirclePlay} />
                                        </div>
                                    </figure>

                                    <div className="card-content">
                                        <div className="card-meta">
                                            <time dateTime={new Date(podcast.datePublished).toISOString()}>
                                                {new Date(podcast.datePublished).toLocaleDateString()}
                                            </time>
                                            <button type="button" className="add-button" onClick={() => handleAddToPlaylist(podcast.id)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                            <p className="pod-episode">Episode: {podcast.episode || 'N/A'}</p>
                                        </div>
                                        <h4>{podcast.title}</h4>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {currentAudioUrl && (
                        <div className="audio-player">
                            <audio
                                id="audioPlayer"
                                ref={audioPlayerRef}
                                controls
                                autoPlay
                                onEnded={handleAudioEnded}
                            >
                                <source src={currentAudioUrl} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <button className="close-btn"><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    )}
            </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Discover;