import { Button } from '@mui/material';
import React from 'react';
import styles from './Home.module.css';
import Fade from 'react-reveal/Fade';


const Home = () => {
    return (
        <div>
         <Fade left cascade>
            <h4 className={styles.subName}>Hi, my name is</h4>
            <h2 className={styles.name}>Ashikur Rahman</h2>
            <h2 className={styles.subTitle}>I build things for the web.</h2>
            <p className={styles.details}>I am a Junior frontend web developer. I make website based on MERN</p>
            <a
                className={styles.anchorBoss}
                href="https://drive.google.com/u/0/uc?id=1Ktl1sVeRSU6pg90K5yAPRlFfpAZ_lf8o&export=download"
                download="AshikurRahman.pdf"
                >
            <Button className={styles.myButton}>
                Download Resume
            </Button>
            </a>
            </Fade>
        </div>
    );
};

export default Home;