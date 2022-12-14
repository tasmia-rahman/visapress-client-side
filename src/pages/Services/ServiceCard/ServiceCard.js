import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, image, price, description } = service;
    return (
        <div>
            <Card>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <Card.Img variant="top" src={image} />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>
                        <h4 className='red-color'>{name}</h4>
                    </Card.Title>
                    <Card.Text>
                        <p>Price: ${price}</p>
                        <p>{description.substring(0, 100) + '...'}</p>
                    </Card.Text>
                    <Button variant="primary">
                        <Link to={`/services/${_id}`} className='text-white no-underline'>View Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;