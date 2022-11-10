import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyReviewUpdate = () => {
    const review = useLoaderData();
    const { _id, serviceName } = review;

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const updatedReviewText = form.updatedReview.value;
        console.log(updatedReviewText);
        form.reset();

        fetch(`http://localhost:5000/my_reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('visapressDB-token')}`
            },
            body: JSON.stringify({ reviewText: updatedReviewText })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Updated successfully');
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <Container className='mb-5'>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <Toaster />
            <h3 className='text-center red-color title'>Edit Review</h3>
            <h4 className='text-center my-4'>Service Name: <span className='red-color'>{serviceName}</span></h4>
            <div className='d-flex justify-center'>
                <Form onSubmit={handleUpdateReview}>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '180px', width: '500px' }}
                            name="updatedReview"
                        />
                    </FloatingLabel>
                    <div className='d-flex justify-center'>
                        <Button className='mt-3' type="submit">Update review</Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}
export default MyReviewUpdate;