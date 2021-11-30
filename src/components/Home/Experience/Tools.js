import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Tools = () => {
    const webImages=[
       {img:'https://i.ibb.co/q1c73t7/images-1.png', name:'Git'},
       {img:'https://i.ibb.co/3YvG6sH/vs.png', name:'Vs code'},
       {img:'https://i.ibb.co/4723r8T/33149672.png', name:'Chrome dev tool'}
    ]
    


    
    
    
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {webImages.map((index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                    <Card sx={{ maxWidth: 345, backgroundColor:'#ccd6f6' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={index.img}
          alt="green iguana"
        />
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