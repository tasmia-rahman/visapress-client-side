import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyReviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://visapress-server.vercel.app/my_reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('visapressDB-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.error(err))
    }, [user?.email, logout])

    const handleDeleteReview = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order?');
        if (proceed) {
            fetch(`https://visapress-server.vercel.app/my_reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('visapressDB-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <Container className='my-5'>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <Toaster />
            <h3 className='text-center red-color title mb-4'>My Reviews</h3>
            {
                reviews.length === 0 ?
                    <h3 className='text-center red-color title mb-4'>No reviews were added</h3>
                    :
                    reviews.map(review => <MyReviewCard key={review._id} review={review} handleDeleteReview={handleDeleteReview}></MyReviewCard>)
            }
        </Container>
    );
};

export default MyReviews;