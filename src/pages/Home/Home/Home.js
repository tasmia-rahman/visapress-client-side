import React from 'react';
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
                <section
                    class="relative bg-[url(https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                    ></div>

                    <div
                        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div class="max-w-xl text-center sm:text-left">
                            <h1 class="text-3xl font-extrabold sm:text-5xl">
                                Welcome To

                                <strong class="block font-extrabold text-rose-700">
                                    VisaPress
                                </strong>
                            </h1>

                            <div class="mt-8 flex flex-wrap gap-4 text-center">
                                <a
                                    href="/"
                                    class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    Get Started
                                </a>

                                <a
                                    href="/"
                                    class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <h3 className='text-center red-color about-title'>About</h3>
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