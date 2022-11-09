import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import HomeServices from '../HomeServices/HomeServices';


const Home = () => {
    return (
        <Container fluid className='home-container'>
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
        </Container>
    );
};

export default Home;