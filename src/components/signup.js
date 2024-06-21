import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock, faEyeSlash, faUser, faAt, faEye } from '@fortawesome/free-solid-svg-icons';


function Signup({user, setUser}) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });


    const navigate = useNavigate();

    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignupFormSubmit = (e) => {
        e.preventDefault();
    
        const { firstName, lastName, username, password } = formData;

        const body = {
          firstName,
          lastName,
          username,
          password
        };
    
        console.log('body :>> ', body);
    
        fetch(`http://localhost:3000/auth/signup`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
        })
          .then((response) => {
            console.log(response);
            if (response.status === 400) {
                throw new Error('Username already exists');
            }
            response.json()})
          .then((result) => {
            console.log("result :>> ", result);
            localStorage.setItem("user", JSON.stringify(result.data));
            setUser(result.data); // Update user state
            // navigate("/home");
          })
          .catch((error) => {
            console.log(error)
            if (error === 'Error: Username already exists') {
                console.log('youve made it in!')
                navigate('/login')
            }
            console.log("There was a problem fetching the data: ", error)});
        
    };


    const handleNavigation = () => {
        navigate('/login')
    }

    return (
        <form onSubmit={handleSignupFormSubmit}>
            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name"/>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name"/>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faAt} className="icon"/>
                        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} placeholder="Enter a username"/>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faLock} className="icon"/>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter a password"/>
                    </div>
                </div>
                {/* <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faLock} className="icon"/>
                        <input type="password"  name="" placeholder="Re-enter your password"/>
                        <FontAwesomeIcon icon={faEyeSlash} className="icon" id="eye-slash"/>
                    </div>
                </div> */}
                <div className="forgot-password">Lost Password? <span>Click Here</span></div>
                <div className="submit-container">
                    <button className="submit" type="submit">Sign Up</button>
                    <div className="submit" type="button" onClick={handleNavigation}>Login</div>
                </div>
            </div>
        </form>

    )
} 

export default Signup;