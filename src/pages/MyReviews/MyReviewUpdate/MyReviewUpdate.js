import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const MyReviewUpdate = () => {
    const review = useLoaderData();
    const { _id, serviceName, date, reviewText } = review;

    return (
        <div className='d-flex justify-content-center mb-5'>
            <Card style={{ width: '500px' }}>
                <Card.Body>
                    <Card.Title>Service Name: <span className='red-color'>{serviceName}</span></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Time: {date}</Card.Subtitle>
                    <Card.Text>
                        <span className='font-semibold'>Review:</span> {reviewText}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyReviewUpdate;