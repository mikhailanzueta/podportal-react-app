import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { useNavigate, Link } from "react-router-dom";
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faCirclePlay, faXmark, faPlus  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


function Home({hash4Header, apiHeaderTime}) {
    const [randomPodcasts, setRandomPodcasts] = useState([]);
    const [currentAudioUrl, setCurrentAudioUrl] = useState('')
    const audioPlayerRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/home')
        .then((response) => response.json())
        .then((data) => {
            console.log('Random Podcasts:', data);
            setRandomPodcasts(data.data); // Set the fetched random podcasts to state
        })
        .catch((error) => console.error('Could not fetch your podcasts', error));
    }, []); 

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
    const handleAddToPlaylist = async () => {
        try {
            const response = await fetch(`/playlist/:playlistId/podcast/:podcastId`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
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
            {/* <!--NAVBAR CONTENT--> */}
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/home">
                        <img src="images\podcast.svg" alt="Podportal" />
                    </Link>
                </div>
            </div>
            <div className="link-container">
                <input type="checkbox" id="check" />
                <ul className="navbar-links">
                    <li>
                        <Link to='/discover'>Discover</Link>
                    </li>
                    <li>
                        <Link to='/library'>Library</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <label htmlFor="check" className="close-menu"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></label>
                </ul>
                <label htmlFor="check" className="check-btn">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>
            </div>

            


            {/* <!--FEATURED PODCAST HEADER--> */}
            <div className="featured-container">
                <div className="featured-podcast-container">
                    <h1>Featured Podcasts</h1>
                </div>
            </div>

            {/* <!--FEATURED PODCAST CONTENT--> */}
            <section className="podcasts" id="podcasts">
                <ul className="podcast-list">
                        {randomPodcasts.slice(4).map((podcast, index) => (
                            <li key={index}>
                                <a href="#" className="podcast-card" onClick={() => handlePodcastClick(podcast.enclosureUrl)}>
                                    <figure className="card-banner">
                                        <img src={podcast.image || podcast.feedImage} alt={`podcast-${index + 4}`} className='card-banner-img'/>
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
                        </div>
                    )}
            </section>

           


            {/* <!--DISCOVER AND CREATE-->
            <div className="content-container">
                <div className="content">
                    <div className="discover-playlist">
                        <div className="discover-container">
                            <div className="discover-content">
                                <h2>Discover</h2>
                                <p className="discover-paragraph">
                                    Introducing our new Discover feature! Dive into a world of endless podcast possibilities with just a tap. 
                                    Whether you're into true crime, comedy, history, or wellness, our curated selection has something for everyone. 
                                    Browse through categories, explore trending topics, or let our personalized recommendations guide you to your next favorite listen. 
                                </p>
                                <button className="discover-btn"><span>Discover</span></button>
                            </div>
                        </div>
                        <div className="discover-container">
                            <div className="discover-content">
                                <h2>Playlist</h2>
                                <p className="discover-paragraph">
                                    Whether it's a collection of motivational episodes for your morning routine or a lineup of chilling 
                                    mysteries for your evening unwind, the possibilities are endless. 
                                    Easily add, remove, and rearrange episodes to craft the perfect playlist for any occasion. 
                                    Take charge of your podcast journey and elevate your listening with the Playlist feature—because every moment deserves the perfect soundtrack.
                                </p>
                                <button className="discover-btn"><span>Create</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!--FOOTER SECTION--> */}
            <footer>
                <div className="row">
                    <div className="col">
                        <h2>About Us</h2>
                        <p>At PodPortal, we're dedicated to bringing you the best in podcasts, offering a diverse array of topics and voices to spark your curiosity and fuel your imagination.</p>
                    </div>
                    <div className="col">
                        <h2>Contact Us</h2>
                        <h4>Phone: 1 (555) 55 5555</h4>
                        <p className="email">Email: mikianzueta@gmail.com</p>
                        <p>Address: 123 ABC Street, Jacksonville, Florida</p>
                    </div>
                    <div className="col">
                        <h2>Follow Us</h2>
                        <ul>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>
                            </li>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
                            </li>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
                            </li>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Stay Connected</h2>
                        <p className="newsletter">Enter your email to sign up for our weekly newsletter</p>
                        <form>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                        </form>
                    </div>
                </div>
                <hr></hr>
                <p className="copyright">PodPortal &copy; 2024 - All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Home;