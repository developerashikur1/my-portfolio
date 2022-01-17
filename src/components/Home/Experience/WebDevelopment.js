import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const WebDevelopment = () => {
    const webImages=[
     {img:'https://i.ibb.co/b3YKptG/html.png', name:'Html5'},
     {img:'https://i.ibb.co/kh9wPg5/css.png', name:'Css3'},
     {img:'https://i.ibb.co/4KwzMjH/bootstrap-react.png', name:'R-Bootstrap'},
     {img:'https://i.ibb.co/jzxMy23/materialui.png', name:'Material UI'},
     {img:'https://i.ibb.co/BtCbY2S/react.png', name:'React.js'},
     {img:'https://i.ibb.co/KWgmrJr/es6.png', name:'Es6'},
     {img:'https://i.ibb.co/ZHSvgk3/javascript.png', name:'Javascript'},
     {img:'https://i.ibb.co/MPqHHXq/Expressjs.png', name:'Express'},
     {img:'https://i.ibb.co/dfcFfMH/mongodb.png', name:'MongoDB'},
     {img:'https://i.ibb.co/Gvf8ZDL/node.png', name:'Node.js'},
     
    ]
    
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {webImages.map((index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                    <Card sx={{ maxWidth: 345, minHeight:120, backgroundColor:'#ccd6f6', textAlign:'center' }}>
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

export default WebDevelopment;