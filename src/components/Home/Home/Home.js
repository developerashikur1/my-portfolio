import { Button, Container } from '@mui/material';
import React from 'react';
import styles from './Home.module.css'


const Home = () => {
    return (
        <Container>
            <h4 className={styles.subName}>Hi, my name is</h4>
            <h2 className={styles.name}>Ashikur Rahman</h2>
            <h2 className={styles.subTitle}>I build things for the web.</h2>
            <p className={styles.details}>I am a Junior frontend web developer. I make website base on MERN</p>
            <Button className={styles.myButton}>Contact me</Button>
        </Container>
    );
};

export default Home;