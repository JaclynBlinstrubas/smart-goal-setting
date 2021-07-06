import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormStyle } from './FormStyle';

const GoalForm = () => {


    
    return (
        <FormStyle>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>SPECIFIC </Form.Label>
                    <Form.Control type="input" placeholder="add your goal here" />
                </Form.Group><br /><br />
                <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>MEASUREABLE </Form.Label>
                    <Form.Control type="input" placeholder="how will you measure your goal?" />               
                </Form.Group><br /><br />
                <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>ACHIEVABLE </Form.Label>
                    <Form.Control type="input" placeholder="what are the steps to reach your goal?" />               
                </Form.Group><br /><br />
                <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>RELEVANT </Form.Label>
                    <Form.Control type="input" placeholder="what does your goal mean to you?" />               
                </Form.Group><br /><br />
                <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>TIMELY </Form.Label>
                    <Form.Control type="input" placeholder="what is the time frame to reach your goal?" />               
                </Form.Group><br /><br />
                <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>notes </Form.Label>
                    <Form.Control type="input" placeholder="notes" />               
                </Form.Group><br /><br />
                <Button variant="primary" type="submit">
                        submit
                    </Button>
            </Form>
        </FormStyle>
    );
};

export default GoalForm;