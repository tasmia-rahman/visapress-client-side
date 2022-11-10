import React from 'react';
import { Card } from 'react-bootstrap';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, handleUpdateReview, handleDeleteReview }) => {
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
                    <div className='d-flex justify-content-center'>
                        <Link to={`/my_reviews/${_id}`} className='red-color text-2xl no-underline mr-5'>
                            <HiPencilAlt></HiPencilAlt>
                        </Link>
                        <HiTrash onClick={() => handleDeleteReview(_id)} className='red-color text-2xl no-underline'></HiTrash>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyReviewCard;