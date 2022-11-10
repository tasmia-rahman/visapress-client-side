import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://visapress-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => console.error(err))
    }, []);

    if (loading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    return (
        <div className='pb-5'>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <h2 className='text-center red-color title mb-4'>Services</h2>
            <Container>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;