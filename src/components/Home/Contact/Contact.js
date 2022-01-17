import { Alert, Button, Grid,Typography } from '@mui/material';
import styles from './Contact.module.css';
import Fade from 'react-reveal/Fade';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const form = useRef();
    const sendEmail = (e) => {
        
        e.preventDefault();
        
        emailjs.sendForm('service_crc1oni', 'template_mmjrkyh', form.current, 'user_Fk8X15hGVLHaiyRZ3QspH')
        .then((result) => {
            setSuccess(result.text);
            setError('')
        }, (error) => {
            setError(error.text);
            setSuccess('')
        });
        e.target.reset();
    };

    setTimeout(function(){ setSuccess('') || setError('') }, 5000);
    
    return (
        <div style={{marginTop:'100px'}}>
         <Fade bottom cascade>
           <Fade bottom cascade>
            <Typography style={{fontWeight:600, color:'#ccd6f6', textAlign:"center", marginBottom:'60px'}} variant="h3" gutterBottom component="div">
            Get In Touch
      </Typography>
      </Fade>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 5 }}>

                          <Grid item xs={12} md={3}>

                          </Grid>
                          <Grid item xs={12} md={6}>
                              <div className={styles.formParent}>
                            <form className={styles.userForm} ref={form} onSubmit={sendEmail}>
                            
                            <input required type="text" name="name" placeholder="Your Name"/>
                            
                            <input required type="email" name="email" placeholder="Your Email" />
                            
                            <textarea required name="message" placeholder="Message" />
                            <br/>
                            <Button type="submit" >Send</Button>
                            </form>
                            <br/>
                            { success && <Alert style={{textAlign:'center'}} severity="success">Message Send successfully</Alert>}
                            { error && <Alert style={{textAlign:'center'}} severity="error">Message Send successfully</Alert>}
                              </div>
                          </Grid>
                          <Grid item xs={12} md={3}>
                         {/* <div>
                            <Grid>

                            </Grid>
                             <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 5 }}>
                             <Grid item xs={4} md={4}>
                                 Hi
                             </Grid>
                             <Grid item xs={8} md={8}>
hi5
                             </Grid>
                             </Grid>
                         </div> */}
                        </Grid>
            </Grid>
            </Fade>
        </div>
  );
};

export default Contact;