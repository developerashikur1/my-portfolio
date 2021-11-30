import { Typography } from '@mui/material';
import React from 'react';
import styles from './Projects.module.css'
import ProjectsAll from './ProjectsAll';


const Projects = () => {
    return (
        <div style={{margin:'150px 0 150px 0'}}>
            <Typography className={styles.about} variant="h4">
                        Works
                    </Typography>
                    <ProjectsAll></ProjectsAll>
        </div>
    );
};

export default Projects;


