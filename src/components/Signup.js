import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormStyle } from './FormStyle';




const Signup = () => {
    const [signUp, setSignUp] = useState();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/token/login/' 
    
        fetch(url)
            .then(result => result.json())
            .then((result) => {
                setSignUp(result)
            })
    }, []);


    return (
        <FormStyle>
            <Form><br /><br />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>email address  </Form.Label>
                    <Form.Control type="email " placeholder="enter email" />     
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>password  </Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group><br />
                <Button variant="primary" type="submit">
                    submit
                </Button>
            </Form>
        </FormStyle>
    );
};

export default Signup;