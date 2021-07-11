import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {


    // const url = `http://localhost:8000/goal/`;

    // const [goal, setGoal] = useState('');

    // fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-type": "application/json",
    //         "Authorization": `Token ${localStorage.getItem("token")}`,
    //     },

    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         // if login is successful
    //         if (data.auth_token) {
    //             localStorage.setItem('user', goal.username)
    //         }
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //     });


    return (
        // <div className="goal-card">
        //     Your Goals: 
        //     <p>SPECIFIC: {goal.specific}</p>
        //     <p>MEASUREABLE: {goal.measureable}</p>
        //     <p>ACHIEVABLE: {goal.achievable}</p>
        //     <p>RELEVANT: {goal.relevant}</p>
        //     <p>TIMELY: {goal.timely}</p>
        //     <p>OVERALL GOAL: {goal.overall_goal}</p>
        //     <p>NOTES: {goal.notes}</p>
        // </div>

        <>
            <br /><a className="link-style" href="/form"> [ create a new goal here ]</a> or  
            <a className="link-style" href="/goal">[ see your saved goals ]</a>
        </>
    );
};

export default Users;