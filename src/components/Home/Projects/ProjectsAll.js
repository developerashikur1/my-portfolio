import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './ProjectsAll.module.css'



const ProjectsAll = () => {
    const projects=[
        {
        name:'Doctors Care',
        img:'https://i.ibb.co/pKQN1my/doctor.png',
        descriptionA:'1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book.'
    },
    {
        second:'ACL Motors',
        img:' https://i.ibb.co/mTvNPJN/motors.png',
        descriptionB:'2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book.'
    },
    {
        third:'VM Travels',
        img:'https://i.ibb.co/sqb65Lh/travel.png',
        descriptionC:'3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book.'
    },
]
    return (
        <div style={{marginTop:'80px'}}>
            <Grid container rowSpacing={8} style={{display:'flex', alignItems:'center'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {/* divided 1 */}
                <Grid className={styles.first} item xs={12} md={7} style={{zIndex:1, marginRight:'-100px'}}>
                    <img style={{width:'100%', filter:'brightness(50%)', backgroundColor: 'rgba(0,0,0,0.5)'}} src={projects[0]?.img} alt="" />
                </Grid>

                <Grid className={styles.second} item xs={12} md={6} style={{textAlign:'right', zIndex:2}}>
                        <h4 className={styles.subName}>Featured Project</h4>
                    <h2 className={styles.name}>{projects[0]?.name}</h2>
                    <Box>
                        <Paper elevation={3} style={{backgroundColor:'#0d284d96', padding:'25px'}}>
                        <Typography variant="body1" style={{color:'#a8b2d1'}}>
                        {projects[0]?.descriptionA}
                        </Typography>
                        </Paper>
                    </Box>
                    <Typography style={{color:'#a8b2d1', margin:'15px 0 25px 0'}}>react &nbsp; jsx &nbsp; node &nbsp; javascript &nbsp; es6</Typography>

                    <a
                        className={styles.anchorBoss}
                        href="https://doctors-care-12ac7.web.app/"
                        >
                            <Button className={styles.myButton}><i class="fas fa-external-link-alt"></i> &nbsp; Visit Now</Button>
            
                    </a>
                    
                </Grid>


                {/* divided 2 */}
               
                <Grid className={styles.third} item xs={12} md={6} style={{zIndex:2, marginRight:"-100px"}}>
                        <h4 className={styles.subName}>Featured Project</h4>
                    <h2 className={styles.name}>{projects[1].second}</h2>
                    <Box>
                        <Paper elevation={3} style={{backgroundColor:'#0d284d96', padding:'25px'}}>
                        <Typography variant="body1" style={{color:'#a8b2d1'}}>
                            {projects[1]?.descriptionB}
                        </Typography>
                        </Paper>
                    </Box>
                    <Typography style={{color:'#a8b2d1', margin:'15px 0 25px 0'}}>react &nbsp; jsx &nbsp; node &nbsp; javascript &nbsp; es6</Typography>
                    <a
                        className={styles.anchorBoss}
                        href="https://doctors-care-12ac7.web.app/"
                        >
                            <Button className={styles.myButton}><i class="fas fa-external-link-alt"></i> &nbsp; Visit Now</Button>
            
                    </a>
                </Grid>
                <Grid className={styles.fourth} item xs={12} md={7} style={{zIndex:1}}>
                    <img style={{width:'100%', filter:'brightness(50%)', backgroundColor: 'rgba(0,0,0,0.5)'}} src={projects[1]?.img} alt="" />
                </Grid>

{/* divided 3 */}

                <Grid className={styles.fifth} item xs={12} md={7} style={{zIndex:1, marginRight:'-100px'}}>
                    <img style={{width:'100%', filter:'brightness(50%)', backgroundColor: 'rgba(0,0,0,0.5)'}} src={projects[2]?.img} alt="" />
                </Grid>

                <Grid className={styles.sixth} item xs={12} md={6} style={{textAlign:'right', zIndex:2}}>
                        <h4 className={styles.subName}>Featured Project</h4>
                    <h2 className={styles.name}>{projects[2]?.third}</h2>
                    <Box>
                        <Paper elevation={3} style={{backgroundColor:'#0d284d96', padding:'25px'}}>
                        <Typography variant="body1" style={{color:'#a8b2d1'}}>
                        {projects[2]?.descriptionC}
                        </Typography>
                        </Paper>
                    </Box>
                    <Typography style={{color:'#a8b2d1', margin:'15px 0 25px 0'}}>react &nbsp; jsx &nbsp; node &nbsp; javascript &nbsp; es6</Typography>
                    <a
                        className={styles.anchorBoss}
                        href="https://doctors-care-12ac7.web.app/"
                        >
                            <Button className={styles.myButton}><i class="fas fa-external-link-alt"></i> &nbsp; Visit Now</Button>
            
                    </a>
                </Grid>
            </Grid>
            <Grid style={{textAlign:'center', marginTop:'70px'}}>
                    <Button className={styles.myButton}>More Projects</Button>
            </Grid>
        </div>
    );
};

export default ProjectsAll;