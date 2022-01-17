import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './About.module.css'
import Fade from 'react-reveal/Fade';
const About = () => {
    const aboutImage = 'https://i.ibb.co/0DWQPXd/developer.png';
    return (
        <div className={styles.totalAbout}>
         <Fade bottom cascade>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 2, md: 3 }}>
                <Grid className={styles.mainSection} item xs={12} sm={8} md={7}>
                    <Typography className={styles.about} variant="h4">
                        About Me
                    </Typography>
                    <Typography style={{marginTop:'50px',marginBottom:"25px", color:'#8892b0' }}>
                    My name is Ashikur Rahman. I am a  MERN based frontend  web developer.
                    <br/><br/>
I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matter.<br/><br/>
My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study, and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ. I currently work remotely with a selected freelance client base and am open to new opportunities.
                    </Typography>
                    <Button className={styles.myButton}>Contact Me</Button>
                </Grid>
                <Grid style={{padding:'5%'}} item xs={12} sm={4} md={5}>
                    <div style={{border:'3px solid orange', boxShadow:'1px 1px 5px orange', borderRadius:'5px'}}>
                    <img className={styles.aboutImages} src={aboutImage} alt=""/>
                    </div>
                </Grid>
            </Grid>
            </Fade>
        </div>
    );
};

export default About;