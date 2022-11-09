import React from 'react';
import background from '../../../assets/images/background.jpg';
import Container from 'react-bootstrap/Container';
import './Home.css';
import { Button } from 'react-bootstrap';
import { FaGraduationCap } from "react-icons/fa";
import { HiLibrary } from "react-icons/hi";
import { HiViewBoards } from "react-icons/hi";

const Home = () => {
    return (
        <Container fluid className='home-container'>
            <div className='banner'>
                <img className='img-fluid' src={background} alt="" />
                <p>WELCOME TO THE TEACHME</p>
            </div>
            <h3 className='text-center blue-color about-title'>About</h3>
            <div className='about-container text-center'>
                <div className='about-div'>
                    <FaGraduationCap className='about-icons mt-5 mb-3'></FaGraduationCap>
                    <h4 className='mb-3'>Custom Courses</h4>
                    <p className='mb-3 mx-4'>Professional language courses for online learning!</p>
                    <Button className='mb-5'>Read More</Button>
                </div>
                <div className='about-div'>
                    <HiLibrary className='about-icons mt-5 mb-3'></HiLibrary>
                    <h4 className='mb-3'>Awesome Teachers</h4>
                    <p className='mb-3 mx-4'>Teachers that help you build professional career!</p>
                    <Button className='mb-5'>Read More</Button>
                </div>
                <div className='about-div'>
                    <HiViewBoards className='about-icons mt-5 mb-3'></HiViewBoards>
                    <h4 className='mb-3'>Pro Dashboards</h4>
                    <p className='mb-3 mx-4'>Responsive and retina ready dashboards for learning!</p>
                    <Button className='mb-5'>Read More</Button>
                </div>
            </div>
        </Container>
    );
};

export default Home;