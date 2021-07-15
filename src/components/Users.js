import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = ({ formData, setFormData }) => {


    const url = `https://jlb-smart-goal-be.herokuapp.com/goal/`;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`,
        },

    })
        .then((res) => res.json())
        .then((data) => {
            console.log(formData);
            // if login is successful
            if (data.auth_token) {
                localStorage.setItem('user', formData.username)
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    if (formData == "hello") {
        return <p>loading..</p>
    }
    console.log(formData)

    return (
        <>
        {/* <br /><a className="link-style" href="/form"> [ create a new goal here ]</a> or  
            <a className="link-style" href="/goal">[ see your saved goals ]</a><br /><br /> */}


        <div className="goal-card">
            Your Goals: 
            <p>SPECIFIC: {formData.specific}</p>
            <p>MEASUREABLE: {formData.measureable}</p>
            <p>ACHIEVABLE: {formData.achievable}</p>
            <p>RELEVANT: {formData.relevant}</p>
            <p>TIMELY: {formData.timely}</p>
            <p>OVERALL GOAL: {formData.overall_goal}</p>
            <p>NOTES: {formData.notes}</p>
        </div>

        
            
        </>
    );
};

export default Users;