import { CircularProgress, Container } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import OtherProjects from '../OtherProjects/OtherProjects';
import Projects from '../Projects/Projects';

const MainHome = () => {   
    const [loader, setLoader] = useState(true)

    setTimeout(function(){ setLoader(false) }, 3000);

    return (
        <>
        <Header></Header>
        <Container>

            {loader ? <CircularProgress sx={{textAlign:'center'}}></CircularProgress>
                :
                <>
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <OtherProjects></OtherProjects>
            <Contact></Contact>
            <Footer></Footer>
            </>
            }

        </Container>
        </>
    );
};

export default MainHome;