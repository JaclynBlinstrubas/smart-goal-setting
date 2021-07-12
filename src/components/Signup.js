import React, { useState } from 'react';
 
const Signup = () => {

    const [user, setUser] = useState("")
    const [error, setError] = useState(false)

    const signUp = (event) => {
        event.preventDefault()
        const url = 'http://localhost:8000/users/';
        fetch(url, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(() => setError(true))
    };

    const handleChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };
            
    return (
        <>
            <p>create your own account below to add and keep track of your goals!</p>
            <div className="form">
                <form onSubmit={signUp}>
                    <label htmlFor="username">create a username </label>
                    <input id="username" type="text" placeholder="create a username" onChange={handleChange} /><br /><br />
                    <label htmlFor="email">enter your email </label>
                    <input id="email" type="text" placeholder="enter your email" onChange={handleChange} /><br /><br />
                    <label htmlFor="password">create a password </label>
                    <input id="password" type="text" placeholder="create a password" onChange={handleChange} /><br /><br />
                    <label htmlFor="password">re-enter password </label>
                    <input id="re_password" type="text" placeholder="re-enter your password" onChange={handleChange} /><br /><br />
                    <button type="submit" className="submit-button">[ submit ]</button>
                    {error ? (
                        <p>password or email is incorrect, pleast try again.</p>
                    ) : null}
                </form>
            </div>
        </>
    );
};

export default Signup;