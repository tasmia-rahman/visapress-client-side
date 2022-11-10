import React from 'react';
import Reviews from '../Reviews/Reviews/Reviews';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServicePage = () => {
    const service = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Service Detail</title>
            </Helmet>
            <ServiceDetail service={service}></ServiceDetail>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServicePage;