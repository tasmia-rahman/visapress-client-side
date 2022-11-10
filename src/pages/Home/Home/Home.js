import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import HomeServices from '../HomeServices/HomeServices';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <Container fluid className='home-container'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
        </Container>
    );
};

export default Home;