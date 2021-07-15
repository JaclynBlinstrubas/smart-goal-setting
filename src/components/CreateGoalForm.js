import React from 'react';
import { Link } from "react-router-dom";


const CreateGoalForm = ({ formData, setFormData }) => {

    const formFields = {};

    // setting data fields to user state
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };


    function handleSubmit(event) {
        event.preventDefault();
        const url = `https://jlb-smart-goal-be.herokuapp.com/goal/`;
        if (typeof window !== "undefined") {

            const token = localStorage.getItem("auth_token")
            console.log(token)
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify(formData)
            })
                .then((res) => res.json())
                .then((result) => {
                    setFormData(result)
                    console.log(formData)
                    if (result.auth_token) {
                        localStorage.setItem('user', formData.username)
                    }

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    if (formData === undefined) {
     return <p>loading..</p>
    }

    return (
            <div className='goal-form'>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="specific">SPECIFIC </label>
                    <input id="specific" type="text" placeholder="add your goal here" onChange={handleChange} /><br /><br />

                    <label htmlFor="measureable">MEASUREABLE </label>
                    <input id="measureable" type="text" placeholder="how will you measure your goal?" onChange={handleChange} /><br /><br />

                    <label htmlFor="achievable">ACHIEVABLE </label>
                    <input id="achievable" type="text" placeholder="what are the steps to reach your goal?" onChange={handleChange} /><br /><br />

                    <label htmlFor="relevant">RELEVANT </label>
                    <input id="relevant" type="text" placeholder="what does your goal mean to you?" onChange={handleChange} /><br /><br />

                    <label htmlFor="timely">TIMELY </label>
                    <input id="timely" type="text" placeholder="what is the time frame to reach your goal?" onChange={handleChange} /><br /><br />

                    <label htmlFor="overall_goal">YOUR GOAL </label>
                    <input id="overall_goal" type="text" placeholder="put it all together" onChange={handleChange} /><br /><br />

                    <label htmlFor="notes">NOTES </label>
                    <input id="notes" type="text" placeholder="any extra notes" onChange={handleChange} /><br /><br />
                    
                    <Link to="/users"><button className="submit-button" type="submit">[ submit ]</button></Link>
                </form>
            </div>
    );
};

export default CreateGoalForm;