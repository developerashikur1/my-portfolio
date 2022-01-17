
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Experience.module.css';
import { Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

const Experience = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={styles.totalAbout}>
         <Fade left cascade>
            <Typography className={styles.about} variant="h4">
                        Skills
                    </Typography>
            <Tabs value={value} onChange={handleChange} centered style={{marginBottom:'50px', marginTop:'70px'}}>
               <Tab style={{color:'#ccd6f6', fontSize:'15px', fontWeight:'600', textDecoration:'none'}} as={Link} to="/" label="Development"></Tab>
               <Tab style={{color:'#ccd6f6', fontSize:'15px', fontWeight:'600', textDecoration:'none'}} as={Link} to="/hosting" label="Hosting"></Tab>
               <Tab style={{color:'#ccd6f6', fontSize:'15px', fontWeight:'600', textDecoration:'none'}} as={Link} to="/tools" label="Tools"></Tab>
            </Tabs>
            <Outlet></Outlet>
            </Fade>
        </div>
    );
};

export default Experience;