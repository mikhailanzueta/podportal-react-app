import React from "react";

function Discover () {

    return (
        <div>
            <nav className="navigation">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src="public/styles/assets/podcast.svg" alt="Podportal" />
                    </div>

                    <span className="logo_name">Podportal</span>
                </div>

                <div className="menu-items">
                    <ul className="nav-links">
                        <li><a href="index.html">
                            <i className="fa-solid fa-house"></i>
                            <span className="link-name">Home</span>
                        </a></li>
                        <li><a href="login.html">
                            <i className="fa-solid fa-user-plus"></i>
                            <span className="link-name">Signup</span>
                        </a></li>
                        <li><a href="#">
                            <i className="fa-solid fa-gear"></i>
                            <span className="link-name">Settings</span>
                        </a></li>
                        <li><a href="library.html">
                            <i className="fa-solid fa-bookmark"></i>
                            <span className="link-name">Library</span>
                        </a></li>
                    </ul>

                    <ul className="logout">
                        <li><a href="#">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span className="link-name">Logout</span>
                        </a></li>
                    </ul>
                </div>
             </nav>

            {/* <!--MAIN CONTENT SECTION--> */}
            <section className="discover">
                <div className="top">
                    <i className="fa-solid fa-bars"></i>

                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search Here...." />
                    </div>

                    <i class="fa-solid fa-circle-user" id="user-profile"></i>
                </div>

                <div className="discover-content">
                    <div className="overview">
                        <div className="title">
                            <span className="text">Discover</span>
                            <i className="fa-solid fa-radio"></i>
                        </div>

                        <div className="genre-boxes">
                            <a href="test.html" className="genre box-1" id="1">
                                <i className="fa-solid fa-microchip"></i>
                                <span className="text">Test</span>
                            </a>
                            <a href="#" className="genre box-2">
                                <i className="fa-solid fa-landmark"></i>
                                <span className="text">Politics</span>
                            </a>
                            <a href="#" className="genre box-3">
                                <i className="fa-solid fa-dumbbell"></i>
                                <span className="text">Health</span>
                            </a>
                            <a href="#" className="genre box-4">
                                <i className="fa-solid fa-face-grin-tears"></i>
                                <span className="text">Comedy</span>
                            </a>
                            <a href="#" className="genre box-5">
                                <i className="fa-solid fa-atom"></i>
                                <span className="text">Science</span>
                            </a>
                            <a href="#" className="genre box-6">
                                <i className="fa-solid fa-medal"></i>
                                <span className="text">Sports</span>
                            </a>
                            <a href="#" className="genre box-7">
                                <i className="fa-solid fa-medal"></i>
                                <span className="text">Lifestyle</span>
                            </a>
                            <a href="#" className="genre box-8">
                                <i className="fa-solid fa-book"></i>
                                <span className="text">Stories</span>
                            </a>
                            <a href="#" className="genre box-9">
                                <i className="fa-solid fa-music"></i>
                                <span className="text">Music</span>
                            </a>
                            <a href="#" className="genre box-10">
                                <i className="fa-solid fa-podcast"></i>
                                <span className="text">New Releases</span>
                            </a>
                            <a href="#" className="genre box-11">
                                <i className="fa-solid fa-handcuffs"></i>
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