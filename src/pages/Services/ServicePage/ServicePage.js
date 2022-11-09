import React from 'react';
import Reviews from '../Reviews/Reviews';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useLoaderData } from 'react-router-dom';

const ServicePage = () => {
    const service = useLoaderData();
    return (
        <div>
            <ServiceDetail service={service}></ServiceDetail>
            <Reviews></Reviews>
        </div>
    );
};

export default ServicePage;