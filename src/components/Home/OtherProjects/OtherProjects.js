import { Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './OtherProjects.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Fade from 'react-reveal/Fade';

const OtherProjects = () => {
    const othersProjects =[
        {name:'Doctors Appointment', description:'users can log in, booking tour place has a dashboard where users can see his booked place and manage them has an admin dashboard control all placed orders cancel or update the status of all orders admin can make another role as admin also can add a new product to the ', tools:'react bootstrap  jsx   node   javascript   es6   express mongoDB node.js  ', link:'https://doctors-portal-a96f0.web.app/'},
        {name:'Mama Jaben ?', description:'users can log in, booking tour place has a dashboard where users can see his booked place and manage them has an admin dashboard control all placed orders cancel or update the status of all orders admin can make another role as admin also can add a new product to the ', tools:'react bootstrap  jsx   node   javascript   es6   express mongoDB node.js  ', link:'https://car-shop-6abaa.web.app/home'},
        {name:'Morning Schools', description:'users can log in, booking tour place has a dashboard where users can see his booked place and manage them has an admin dashboard control all placed orders cancel or update the status of all orders admin can make another role as admin also can add a new product to the ', tools:'react bootstrap  jsx   node   javascript   es6   express mongoDB node.js  ', link:'https://serene-hypatia-e79571.netlify.app/'},
        {name:'Teachers Meeting', description:'users can log in, booking tour place has a dashboard where users can see his booked place and manage them has an admin dashboard control all placed orders cancel or update the status of all orders admin can make another role as admin also can add a new product to the ', tools:'react bootstrap  jsx   node   javascript   es6   express mongoDB node.js  ', link:'https://upbeat-stonebraker-5badf8.netlify.app/'},
        {name:'Super Shop', description:'users can log in, booking tour place has a dashboard where users can see his booked place and manage them has an admin dashboard control all placed orders cancel or update the status of all orders admin can make another role as admin also can add a new product to the ', tools:'react bootstrap  jsx   node   javascript   es6   express mongoDB node.js  ', link:'https://determined-golick-9e3b26.netlify.app/'},
        {name:'Portfolio', description:'users can log in, booking tour place has a dashboard where users can see his booked place and manage them has an admin dashboard control all placed orders cancel or update the status of all orders admin can make another role as admin also can add a new product to the ', tools:'react bootstrap  jsx   node   javascript   es6   express mongoDB node.js  ', link:'https://my-portfolio-633ae.web.app/'},
    ]
    return (
        <div>
         <Fade left cascade>
        <Typography className={styles.about} variant="h4">
        Other Noteworthy Projects
                    </Typography>
                    <h4 className={styles.subName}>Featured Project</h4>
            <Grid style={{marginTop:'40px'}} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {othersProjects.map(projects=>
                <Grid key={projects.name} item xs={12} md={4}>
                    
                <a target="_blank" style={{textDecoration:'none'}} href={projects.link}>
                                
                <Card className={styles.cards} sx={{ minWidth: 275, padding:'10px', backgroundColor:'#112240' }}>
                    <CardContent>
                        <Typography sx={{display:'flex', fontSize: 26 , color: 'orange', justifyContent: 'space-between'}} color="text.secondary" gutterBottom>
                        <i className="far fa-folder"></i>
                        <i className="fas fa-external-link-alt"></i>
                        </Typography>
                        <Typography style={{color:'#ccd6f6'}} variant="h5" component="div">
                        <br/>
                       {projects.name}
                        <br/>
                        <br/>
                        </Typography>
                        <Typography sx={{ mb: 1.5, color:'#a8b2d1' }} color="text.secondary">
                        {projects.name} {projects.description}
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                    <Typography style={{color:'#a8b2d1'}} variant="body2">
                        {projects.tools}
                        <br />
                        </Typography>
                    </CardActions>
                </Card>

                </a>

                </Grid>
                )}
            </Grid>
            </Fade>
        </div>
    );
};

export default OtherProjects;