import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <Container fluid className='home-container'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </Container>
    );
};

export default Home;