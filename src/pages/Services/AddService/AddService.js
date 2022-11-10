import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const image = form.serviceImage.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            name,
            image,
            price,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('A service added successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <Container className='my-5'>
            <Toaster />
            <h4 className='red-color text-center mb-3'>Add Service</h4>
            <div className='w-5/12 mx-auto'>
                <Form onSubmit={handleAddService}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Service Name</Form.Label>
                        <Form.Control type="text" name="serviceName" placeholder="Service Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Service Image</Form.Label>
                        <Form.Control type="text" name="serviceImage" placeholder="Service Image" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Price" />
                    </Form.Group>
                    <FloatingLabel className='font-semibold' controlId="floatingTextarea2" label="Add description">
                        <Form.Control
                            as="textarea"
                            placeholder="Add description"
                            style={{ height: '100px' }}
                            name="description"
                        />
                    </FloatingLabel>
                    <div className="d-flex justify-center mt-4">
                        <Button className="red-color w-1/2" type="submit" style={{ width: '500px' }}>
                            Add Service
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default AddService;