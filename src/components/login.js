import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock, faAt } from '@fortawesome/free-solid-svg-icons';

function Login({user, setUser}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const loginFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.target.username.value)
        console.log(e.target.password.value)

        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        fetch("https://personal-project-podportal-1.onrender.com/",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.statusCode === 200) {
                    console.log('Success!')
                    localStorage.setItem('user', JSON.stringify(result.data))
                    setUser(result.data)
                    navigate('/discover')
                } else {
                    console.log("Something went wrong!")
                }
            })
            .catch((error) => console.log('There was a problem fetching the data: ', error))
    }

    const handleNavigation = () => {
        navigate('/signup')
    }

    return (
        <form onSubmit={loginFormSubmission}>
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faAt} className="icon"/>
                        <input type="text" name="username" id="username"  value={formData.username} onChange={handleChange} placeholder="Enter your username"/>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon icon={faLock} className="icon"/>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"/>
                    </div>
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here</span></div>
                <div className="submit-container">
                    <div className="submit" type="button" onClick={handleNavigation}>Sign Up</div>
                    <button className="submit" type="submit">Login</button>
                </div>
            </div>
        </form>
        
    )
}

export default Login;