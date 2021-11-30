import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Hosting = () => {
    const webImages=[
      {img:'https://i.ibb.co/MhvJ7yS/heroku.png', name:'Heroku'},
      {img:'https://i.ibb.co/ssqg7c9/logo-logomark.png', name:'Firebase'},
      {img:'https://i.ibb.co/YkFcFjY/netlify.png', name:'Netlify'},
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

export default Hosting;