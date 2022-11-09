import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const ServiceDetail = ({ service }) => {
    const { _id, name, image, price, description } = service;
    return (
        <Container>
            <section class="my-5 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left">
                        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl red-color">
                            {name}
                        </h2>

                        <p class="hidden text-gray-500 md:mt-4 md:block text-justify">
                            {description}
                        </p>

                        <div class="mt-4 md:mt-8 red-color">
                            <h5>Price: ${price}</h5>
                        </div>
                    </div>
                </div>

                <img
                    alt="Student"
                    src={image}
                    class="h-56 w-full object-cover sm:h-full"
                />
            </section>

        </Container>
    );
};

export default ServiceDetail;