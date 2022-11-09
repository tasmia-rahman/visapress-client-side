import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review }) => {
    const { serviceName, date, reviewText } = review;
    return (
        <div className='d-flex justify-content-center mb-5'>
            <Card style={{ width: '500px' }}>
                <Card.Body>
                    <Card.Title>Service Name: <span className='red-color'>{serviceName}</span></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Time: {date}</Card.Subtitle>
                    <Card.Text>
                        <span className='font-semibold'>Review:</span> {reviewText}
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <Link to={`/services/`} className='red-color text-2xl no-underline mr-5'>
                            <HiPencilAlt></HiPencilAlt>
                        </Link>
                        <Link to={`/services/`} className='red-color text-2xl no-underline'>
                            <HiTrash></HiTrash>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyReviewCard;