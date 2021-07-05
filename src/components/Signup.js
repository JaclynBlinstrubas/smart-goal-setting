import React, { UseState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormStyle } from './FormStyle';




const Signup = () => {

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