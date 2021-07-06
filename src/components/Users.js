import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/token/login/' 
    
        fetch(url)
            .then(result => result.json())
            .then((result) => {
                setUser(result)
            })
    }, []);


    return (
        <div>
            <h1> user account information goes here </h1>
        </div>
    );
};

export default Users;