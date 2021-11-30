import { Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <div style={{padding: '70px 0 30px 0', textAlign:'center'}}>
            <Typography className={styles.caption} variant="caption">Designed & Built by Ashikur Rahman</Typography>
            
        </div>
    );
};

export default Footer;