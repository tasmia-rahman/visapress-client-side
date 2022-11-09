import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceCard from '../../../Services/ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home_services')
            .then(res => res.json())
            .then(data => setServices(data))
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
        </div>
    );
};

export default HomeServices;