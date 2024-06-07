import React from 'react'

function Index() {


    return (
        <div>
            {/* <!--NAVBAR CONTENT--> */}
            <div className="navbar-container">
                <div className="logo-container">
                    <a href="index.html">
                        <img src="public/styles/assets/podcast.svg" alt="Podportal" />
                    </a>
                </div>
            </div>
            <div className="link-container">
                <input type="checkbox" id="check" />
                <ul className="navbar-links">
                    <li>
                        <a href="discover.html">Discover</a>
                    </li>
                    <li>
                        <a href="library.html">Library</a>
                    </li>
                    <li>
                        <a href="login.html">Signup</a>
                    </li>
                    <label htmlFor="check" className="close-menu"><i className="fa-solid fa-xmark"></i></label>
                </ul>
                <label htmlFor="check" className="check-btn">
                    <i className="fa fa-bars"></i>
                </label>
            </div>

            


            {/* <!--FEATURED PODCAST HEADER--> */}
            <div className="featured-container">
                <div className="container">
                    <h1>Featured Podcasts</h1>
                </div>
            </div>

            {/* <!--FEATURED PODCAST CONTENT--> */}
            <section className="podcasts" id="podcasts">
                <ul className="podcast-list">
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (1).svg" alt="podcast-1" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 01</p>
                                </div>
                                <h3>The Podcast Company</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (2).svg" alt="podcast-2" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 02</p>
                                </div>
                                <h3>Podnight: Midnight Podcast</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (3).svg" alt="podcast-3" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 03</p>
                                </div>
                                <h3>Thynktalk: Podcast Studio</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (4).svg" alt="podcast-4" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 04</p>
                                </div>
                                <h3>Somolana: The Podcast Show</h3>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>


            {/* <!--TOP CHARTS PODCAST HEADER--> */}
            <div class="top-charts">
                <div class="charts-container">
                    <h1 class="top-charts-header">Top Charts</h1>
                </div>
            </div>

            {/* <!--TOP CHARTS PODCAST CONTENT--> */}
            <section className="podcasts" id="podcasts">
                <ul className="podcast-list">
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (5).svg" alt="podcast-5" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 05</p>
                                </div>
                                <h3>The Adeline Podcast Room</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (6).svg" alt="podcast-6" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 06</p>
                                </div>
                                <h3>Talk Podcast Studio</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (7).svg" alt="podcast-7" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 07</p>
                                </div>
                                <h3>Podtalk Studio</h3>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="podcast-card">
                            <figure className="card-banner">
                                <img src="public/styles/assets/images/podcast (8).svg" alt="podcast-8" />

                                <div className="card-banner-icon">
                                    <i className="fa-solid fa-circle-play"></i>
                                </div>
                            </figure>

                            <div className="card-content">
                                <div className="card-meta">
                                    <time datetime="2024-03-03">March 3, 2024</time>
                                    <p className="pod-episode">Episodes: 08</p>
                                </div>
                                <h3>The Borcelle Podcast Show</h3>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>


            {/* <!--DISCOVER AND CREATE--> */}
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
            </div>

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
                        <p className="email">Email: PodPortal@gmail.com</p>
                        <p>Address: 123 ABC Street, Jacksonville, Florida</p>
                    </div>
                    <div className="col">
                        <h2>Follow Us</h2>
                        <ul>
                            <li>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa-brands fa-spotify"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Stay Connected</h2>
                        <p className="newsletter">Enter your email to sign up for our weekly newsletter</p>
                        <form>
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
                <hr></hr>
                <p className="copyright">PodPortal &copy; 2024 - All Rights Reserved</p>
            </footer>
        </div>
    )
}