import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import {Container,Typography , Grid , TextField , Stack , Box , Button} from "@mui/material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {

    const [subScribe , setSubScribe] = useState('');
    const [openAlert , setOpenAlert] = useState(false);
    const [txtAlert , setTxtAlert] = useState('');

    const submitSub = async () => {

        if(subScribe)
        {
             
  
  
        }else{
  
             
        }
  
  
  
   }

    return (<>
            <footer>
            <Box sx={{backgroundColor:"#006F70", pt:7 , pb:7}}>
            <Container>
                    <Grid rowSpacing={4} alignItems="left" container sx={{color:"#fff"}}>
                                            <Grid item xs={12} md={6} lg={4} textAlign="left">
                                                
                                                <Stack spacing={2}>
                                                        <Typography component="div"><img src='../../assets/img/logopimpa4.png' alt='logo mobile' /></Typography>
                                                        <Typography variant='p' component="div"> © 2020 <Link to="/" rel="noopener noreferrer">Devphin</Link>All Rights Reserved </Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={4} textAlign="left">

                                                <Stack spacing={2}>
                                                    <Typography variant='h5' sx={{color:"#d9d0bd" , fontFamily:"Kanit-light"}}>PAGE</Typography>
                                                    <Stack spacing={1}>
                                                            <Stack spacing={2} direction="row">
                                                                    <ArrowForwardIosIcon sx={{fontsize:14}} />
                                                                    <Link to="/shop" style={{ textDecoration: 'none' , color:"#fff" }}><Typography variant='p'> สินค้า</Typography></Link>
                                                                    
                                                            </Stack>
                                                            <Stack spacing={2} direction="row">
                                                                    <ArrowForwardIosIcon sx={{fontsize:14}} />
                                                                    <Link to="/reviews" style={{ textDecoration: 'none' , color:"#fff" }}><Typography variant='p'> รีวิว</Typography></Link>
                                                                    
                                                            </Stack>
                                                            <Stack spacing={2} direction="row">
                                                                    <ArrowForwardIosIcon sx={{fontsize:14}} />
                                                                    <Link to="/promotion" style={{ textDecoration: 'none' , color:"#fff" }}><Typography variant='p'> โปรโมชั่น</Typography></Link>
                                                                   
                                                            </Stack>
                                                            <Stack spacing={2} direction="row">
                                                                    <ArrowForwardIosIcon sx={{fontsize:14}} />
                                                                    <Link to="/blog" style={{ textDecoration: 'none' , color:"#fff" }}><Typography variant='p'> ข่าวสาร | บล๊อค</Typography></Link>
                                                                   
                                                            </Stack>
                                                    
                                                    </Stack>
                                                
                                                </Stack>
                                                
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={4}  textAlign="left">
                                                
                                            <Stack spacing={2}>
                                                    <Typography variant='h5' sx={{color:"#d9d0bd" , fontFamily:"Kanit-light"}}>CONTACT</Typography>
                                                        <Stack spacing={1}>
                                                                <Stack spacing={2} direction="row">
                                                                    <AddLocationAltIcon sx={{fontSize:24, mr:1}} />
                                                                    <Typography variant='p'> 4/65 หมู่บ้านเสรี 3  แขวงประเวศ <br/>เขตประเวศ กรุงเทพมหานคร 10250</Typography>
                                                                </Stack>
                                                                <Stack spacing={2} direction="row">
                                                                    <CallIcon sx={{fontSize:24, mr:1}} />
                                                                    <Typography variant='p'>064859985</Typography>
                                                                </Stack>
                                                                <Stack spacing={2} direction="row">
                                                                    <ForwardToInboxIcon sx={{fontSize:24, mr:1}} />
                                                                    <Typography variant='p'>pimpa.cosmatic@gmail.com</Typography>
                                                                </Stack>
                                                        </Stack>
                                                </Stack>
                                            </Grid>
                                           
                    </Grid>
              
                </Container>
            </Box>
        </footer>
        <footer style={{background:"#f7f5ef" , textAlign:"center"}}>
                <Typography variant="h6" sx={{p:1}}>Copy right Devphin 2023</Typography>
         </footer>
            </>)

}

export default Footer;