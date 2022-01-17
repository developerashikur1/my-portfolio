import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Tools = () => {
    const webImages=[
       {img:'https://i.ibb.co/q1c73t7/images-1.png', name:'Git'},
       {img:'https://i.ibb.co/3YvG6sH/vs.png', name:'Vs code'},
       {img:'https://i.ibb.co/4723r8T/33149672.png', name:'Chrome dev'}
    ]
    


    
    
    
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {webImages.map((index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                    <Card sx={{ maxWidth: 345, backgroundColor:'#ccd6f6' , textAlign:'center'}}>
      <CardActionArea>
      <div style={{padding: '15px'}}>
        <img 
        style={{height:'65px', padding:'10px'}}
        src={index.img} alt=""/>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {index.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Tools;