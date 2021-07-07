import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormStyle } from './FormStyle';




const Signup = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        const url = "http://localhost:8000/token/login"
            
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                const formData = data.Results.map((element) => {
                    if (element.Value) {
                        return (element.Variable, element.Value)
                    }
                })
                return (formData)
            })
            .catch(data => {
            })
    }

    return (

    <FormStyle>
        <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="username">enter a username </label>
            <input type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="" />
            <br /><br />
            <label className="label" htmlFor="username">email </label>
                <input type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="" />
            <br /><br />
            <label className="label" htmlFor="password">password </label>
            <input type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="" />
            <br /><br />
            <input type="submit" value="submit" />            </form>
    </FormStyle>

        // <FormStyle>
        //     <Form><br /><br />
        //         <Form.Group controlId="formBasicEmail">
        //             <Form.Label>email address  </Form.Label>
        //             <Form.Control type="email " placeholder="enter email" />     
        //         </Form.Group>
        //         <br />
        //         <Form.Group controlId="formBasicPassword">
        //             <Form.Label>password  </Form.Label>
        //             <Form.Control type="password" placeholder="password" />
        //         </Form.Group><br />
        //         <Button variant="primary" type="submit">
        //             submit
        //         </Button>
        //     </Form>
        // </FormStyle>
    );
};

export default Signup;