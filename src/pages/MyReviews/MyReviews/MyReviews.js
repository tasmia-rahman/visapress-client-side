import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import toast, { Toaster } from 'react-hot-toast';

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

    const handleUpdate = id => {
        fetch(`http://localhost:5000/my_reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // const remaining = orders.filter(odr => odr._id !== id);
                    // const approving = orders.find(odr => odr._id === id);
                    // approving.status = 'Approved'

                    // const newOrders = [approving, ...remaining];
                    // setOrders(newOrders);
                }
            })
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/my_reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <Container className='my-5'>
            <Toaster />
            <h3 className='text-center red-color title mb-4'>My Reviews</h3>
            {
                reviews.length === 0 ?
                    <h3 className='text-center red-color title mb-4'>No reviews were added</h3>
                    :
                    reviews.map(review => <MyReviewCard review={review} handleUpdate={handleUpdate} handleDelete={handleDelete}></MyReviewCard>)
            }
        </Container>
    );
};

export default MyReviews;