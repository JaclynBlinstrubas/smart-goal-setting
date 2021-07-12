import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// this form is used for users to login with their sign up information
const LoginForm = ({ setUser }) => {

    const [formData, setFormData] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    let history = useHistory();

    // setting email and password to user state
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };

    //Sending user email and password to database, and awaiting return of token.  Setting the token to local storage and the user id to the activeUser state to allow access to components.
    function handleSignIn(event){
        event.preventDefault();
        const url = `http://localhost:8000/token/login/`;
        if (typeof window !== "undefined") {

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // if login is successful
                    if (data.auth_token) {
                        localStorage.setItem('user', formData.username)
                        setTimeout(() => { window.location.href = '/users' }, 1500)
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };
return (

        <div className='form'>
            <form onSubmit={handleSignIn}>
                <label htmlFor='email'>Email </label>
                <input id='email' type='text' onChange={handleChange} /><br /><br />
                <label htmlFor='password'>Password </label>
                <input id='password' type='text' onChange={handleChange} /><br /><br />
                <button type='submit' className='submit-button'>[ submit ]</button>
                {error ? (
                    <p>password or email is incorrect, please try again.</p>
                ) : null}
                <p>need an account? sign up{' '}
                    <Link to='/signup'>
                        <a className="link-style">[ here ]</a>
                    </Link>
                    . 
                </p>
             </form>
        </div>
    );
};

export default LoginForm;