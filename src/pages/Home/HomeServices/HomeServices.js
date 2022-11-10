import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home_services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, []);

    return (
        <div className='pb-5'>
            <h3 className='text-center red-color title mb-4'>Services</h3>
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
            <div className='text-center mt-5'>
                <Button><Link to='/services' className='text-white no-underline'>See All</Link></Button>
            </div>
        </div>
    );
};

export default HomeServices;