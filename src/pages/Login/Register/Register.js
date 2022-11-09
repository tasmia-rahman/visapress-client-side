import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Register.css';

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setSuccess(true);
                handleUpdateUserInfo(fullName, photoURL);
            })
            .catch(error => setError(error.message))

    }

    const handleUpdateUserInfo = (fullName, photoURL) => {
        const profile = { displayName: fullName, photoURL: photoURL };
        updateUserInfo(profile)
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                // An error occurred
            });
    }
    return (
        <div className='form-div'>
            <h3 className='text-center mb-5 blue-color'>Registration</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className='d-block mb-3'>
                    Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className='d-block mb-3 text-danger'>
                    {error}
                </Form.Text>
                <Button style={{ width: '500px' }} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <h3 className='d-block m-3 text-success text-center'>
                {
                    success ? 'Registered successfully !!!' : ''
                }
            </h3>
        </div>
    );
};

export default Register;