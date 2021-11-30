import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const MainHome = () => {
    return (
        <Container>
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Footer></Footer>
        </Container>
    );
};

export default MainHome;