import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-primary text-center mb-3">Login</h1>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Form>
                <p  className="text-center">Create an account <Link to="/register">Resister</Link></p>
                <div  className="text-center">---------- Or ----------</div>
                <div className="center">
                <button className="btn btn-primary mt-3" onClick={handleGoogleLogIn}>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;