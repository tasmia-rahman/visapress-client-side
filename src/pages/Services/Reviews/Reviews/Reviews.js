import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = ({ service }) => {
    const location = useLocation();

    const { user } = useContext(AuthContext);
    const { _id, name } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://visapress-server.vercel.app/reviews?serviceName=${name}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.error(err))
    }, [name])

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.review.value;

        const review = {
            serviceId: _id,
            serviceName: name,
            userName: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            reviewText
        }

        fetch('https://visapress-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review added successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <Container className='mb-5'>
            <Toaster />
            <div>
                {
                    reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
            <div>
                {
                    user?.uid ?
                        <Form onSubmit={handleAddReview}>
                            <FloatingLabel controlId="floatingTextarea2" label="Review">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a review here"
                                    style={{ height: '180px', width: '500px' }}
                                    name="review"
                                    required
                                />
                            </FloatingLabel>
                            <Button className='mt-3' type="submit">Add a review</Button>
                        </Form>
                        :
                        <h4 className='text-center'>Please <Link to='/login' state={{ from: location }} replace>login</Link> to add a review</h4>
                }
            </div>
        </Container>
    );
};

export default Reviews;