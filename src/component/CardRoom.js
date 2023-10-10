import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const CardRoom = () => {
  
    return (
            <Card sx={{  boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , 
                '&:hover': {
                backgroundColor: '#fff',
                border: 0.3 , 
                borderStyle:"ridge",
                borderColor:"gray",
                cursor:"pointer",
                opacity: [0.9, 0.8, 0.7],
              },}}>
                    <CardMedia
                    sx={{ 
                        height: 260 ,
                     }}
                    image="../../image/mockroom.jpg"
                    title="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Villa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    </Typography>
                    </CardContent>
                    
                     <Grid container spacing={2} sx={{pt:2 , pb:2}} >
                                <Grid item="true" md={6}>
                                    <Typography variant='p' sx={{p:1}}>2 GUESTS / Size: 27ft</Typography>
                                </Grid>
                                <Grid item="true" md={6} sx={{textAlign:"right"}}>
                                    <Button variant='contained' sx={{mb:1,mr:1}}>Detail</Button>
                              </Grid>
                               
                    </Grid>
               </Card>)

}

export default CardRoom;
