import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardPromotion = () => {


    return ( <Card sx={{ boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , 
                        '&:hover': {
                        backgroundColor: '#fff',
                        border: 0.5 , 
                        borderRadius: "15px",
                        borderStyle:"ridge",
                        borderColor:"gray",
                        cursor:"pointer",
                        opacity: [0.9, 0.8, 0.7],
                    },}}>
                            <CardMedia
                            sx={{ 
                                height: 260 ,
                            }}
                            image="../../image/exclusiveimage.jpg"
                            title="green iguana"
                            />
                            <CardContent>
                            <Typography style={{textAlign:"left"}} gutterBottom variant="h5" component="div">
                                Promotion
                            </Typography>
                            <Typography style={{textAlign:"left"}} variant="body2" color="text.secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </Typography>
                            </CardContent>
                           
                    </Card>)

}

export default CardPromotion;