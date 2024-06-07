import React from "react";
import Discover from "./discover";

function Login() {


    return (
        <div>
            {/* <!--Login Form--> */}
            <div className="container">
                <div className="forms">
                    <div className="form login">
                        <span className="title">Login</span>
                        
                        <form action="#">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your e-mail" />
                                <i className="fa-regular fa-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="password" placeholder="Enter your password" />
                                <i className="fa-solid fa-lock icon"></i>
                                <i className="fa-solid fa-eye-slash showHidePw"></i>
                            </div>

                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="logCheck" />
                                    <label htmlFor="logCheck" className="text">Remember me</label>
                                </div>

                                <a href="#" className="text">Forgot Password?</a>
                            </div>

                            <div className="input-field button">
                                <input type="button" value="Login" />
                            </div>
                            
                        </form>

                        <div className="login-signup">
                            <span className="text">Not a member?
                                <a href="#" className="text signup-text">Signup</a>
                            </span>
                        </div>
                    </div>

                    {/* <!--registration Form--> */}
                    <div className="form signup">
                        <span className="title">Register</span>
                        
                        <form action="#">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your first name" />
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Enter your last name" />
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Enter a username" />
                                <i className="fa-solid fa-at"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="password" placeholder="Enter your password" />
                                <i className="fa-solid fa-lock icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" className="password" placeholder="Re-enter your password" />
                                <i className="fa-solid fa-lock icon"></i>
                                <i className="fa-solid fa-eye-slash showHidePw"></i>
                            </div>

                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="logCheck" />
                                    <label htmlFor="logCheck" className="text">Remember me</label>
                                </div>

                                <a href="#" className="text">Forgot Password?</a>
                            </div>

                            <div className="input-field button">
                                <input type="button" value="Signup" />
                            </div>
                            
                        </form>

                        <div className="login-signup">
                            <span className="text">Already a member?
                                <a href="#" className="text signup-text">Login</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Login;