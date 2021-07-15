import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ setUser }) => {

    const [formUser, setFormUser] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setFormUser({ ...formUser, [event.target.id]: event.target.value });
    };

    function handleSignIn(event){
        event.preventDefault();
        const url = `https://jlb-smart-goal-be.herokuapp.com/token/login/`;
        if (typeof window !== "undefined") {

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // if login is successful
                    if (data.auth_token) {
                        localStorage.setItem('user', formUser.username)
                        // setTimeout(() => { window.location.href = '/users' }, 1500)
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