import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormStyle } from './FormStyle';


// this form is used to create a new goal
const CreateGoalForm = () => {

    const formFields = {};
    const [formData, setFormData] = useState(formFields);
    const [message, setMessage] = useState("");
    
    // setting data fields to user state
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };

    function handleSubmit(event) {
        event.preventDefault();
        const url = `http://localhost:8000/goal/`;
        if (typeof window !== "undefined") {

            const token = localStorage.getItem("auth_token")
            console.log(token)
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Token ${token}`
                },
                body: JSON.stringify(formData)
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    if (result.auth_token) {
                        localStorage.setItem('user', formData.username)
                        setTimeout(() => { window.location.href = '/usergoals' }, 1500)
                    }

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };


    return (
        <FormStyle>
        <div>
            <div className='goal-form'>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="specific">SPECIFIC </label>
                    <input id="specific" type="text" placeholder="add your goal here" onChange={handleChange} />

                    <label htmlFor="measureable">MEASUREABLE </label>
                    <input id="measureable" type="text" placeholder="how will you measure your goal?" onChange={handleChange} />

                    <label htmlFor="achievable">ACHIEVABLE </label>
                    <input id="achievable" type="text" placeholder="what are the steps to reach your goal?" onChange={handleChange} />

                    <label htmlFor="relevant">RELEVANT </label>
                    <input id="relevant" type="text" placeholder="what does your goal mean to you?" onChange={handleChange} />

                    <label htmlFor="timely">TIMELY </label>
                    <input id="timely" type="text" placeholder="what is the time frame to reach your goal?" onChange={handleChange} />

                    <label htmlFor="overall_goal">YOUR GOAL </label>
                    <input id="overall_goal" type="text" placeholder="put it all together" onChange={handleChange} />

                    <label htmlFor="notes">NOTES </label>
                    <input id="notes" type="text" placeholder="any extra notes" onChange={handleChange} />
                    <br />
                    <button type='submit' className='submit-goal-button'>
                        submit
                    </button>
                </form>
            </div>
        </div>
        </FormStyle>
    );
};

export default CreateGoalForm;