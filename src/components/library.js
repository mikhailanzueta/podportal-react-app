import React from "react";

function Library() {


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
                        <li><a href="discover.html">
                            <i classNameName="fa-solid fa-bookmark"></i>
                            <span className="link-name">Discover</span>
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
            <section className="playlist">
                <div className="top">
                    <i className="fa-solid fa-bars"></i>

                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search Here...." />
                    </div>

                    <i className="fa-solid fa-circle-user" id="user-profile"></i>
                </div>

                <div className="playlist-activity">
                    <div className="title">
                        <span className="text">Playlist Activity</span>
                        <i className="fa-solid fa-circle-play"></i>
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