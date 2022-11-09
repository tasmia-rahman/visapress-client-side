import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my_reviews?email=${user?.email}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])

    return (
        <Container className='my-5'>
            <h3 className='text-center red-color title mb-4'>My Reviews</h3>
            {
                reviews.length === 0 ?
                    <h3 className='text-center red-color title mb-4'>No reviews were added</h3>
                    :
                    reviews.map(review => <MyReviewCard review={review}></MyReviewCard>)
            }
        </Container>
    );
};

export default MyReviews;