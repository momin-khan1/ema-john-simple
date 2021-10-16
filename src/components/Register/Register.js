import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div  className="container mt-5">
                <h1 className="text-primary text-center mb-3">Register Please</h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                    </Form.Select>
                    </Form.Group>
                    </Row>

                    <div className="center mb-3">
                        <Button variant="primary" type="submit">Submit
                        </Button>
                    </div>
                </Form>
                <p className="text-center">Already have an account <Link to="login">Login</Link></p>
                <div className="text-center">---------- Or ----------</div>
                <div className="center">
                    <button className="btn btn-primary mt-3" onClick={signInUsingGoogle}>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;