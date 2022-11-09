import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const { login, setLoading, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }


    return (
        <div className='form-div'>
            <h3 className='text-center mb-5 blue-color'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className='d-block mb-3'>
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className='d-block mb-3 text-danger'>
                    {error}
                </Form.Text>
                <Button style={{ width: '500px', marginBottom: '15px' }} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Button onClick={handleGoogleSignIn} style={{ width: '500px', marginBottom: '15px' }} variant="success">
                Google
            </Button>
            <Button onClick={handleGithubSignIn} style={{ width: '500px', marginBottom: '15px' }} variant="warning">
                GitHub
            </Button>
        </div>
    );
};

export default Login;