import React , {useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Header from './Header';

import { Box , Stack , Typography  , IconButton , Container , Paper , Button , Fab } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const HeaderTop = ({stylePaper , setUpdateImg , setSwitchImg}) =>  {

  const [count, setCount] = useState(1);
 
  const btnNext = () =>{

      setCount(count + 1)
      setUpdateImg(count + 1)
      if(count === 3)
      {
         setCount(1)
         setUpdateImg(1)
      
      }
      setSwitchImg(true);

  }

  const btnBack = () =>{

    setCount(count - 1)
    setUpdateImg(count - 1)
    if(count === 1)
    {
        setCount(3)
        
    }

    setSwitchImg(true);

  }
    

  return ( <Box className='sticky-bar' sx={{flexGrow:1 , ml:-1  , pr:3 , backgroundColor: "#fff !important" , color:"#000 !important"}}>

            
             <Container>
                <Box sx={{display:"flex" , position:"absolute" , zIndex:2}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }} >
                        <Grid item="true" xs={12} md={6}>
                                            <Stack 
                                                direction="row"
                                                spacing={{ xs: 1, sm: 2, md: 2 }}
                                                sx={{color:"#fff",justifyContent:"center",textAlign:"center",alignItems:"center" , pt:1}}
                                                >
                                                <Typography>โรงแรม</Typography>
                                                <Typography>|</Typography>
                                                <Typography>คาเฟ่</Typography>
                                                <Typography>|</Typography>
                                                <Typography>กิจกรรม</Typography>
                                                
                                            </Stack>
                        </Grid>
                        <Grid item="true" xs={12} sm={6} md={6} >
                                            <Stack 
                                                direction="row"
                                                spacing={{ xs: 1, sm: 1, md: 1 }}
                                                sx={{color:"#fff" , justifyContent:"center",textAlign:"center",alignItems:"center"}}
                                                >
                                                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                                                    <FacebookIcon />
                                                </IconButton>
                                                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                                                    <YouTubeIcon />
                                                </IconButton>
                                                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                                                    <InstagramIcon />
                                                </IconButton>
                                            </Stack>
                        </Grid>
                        <Grid item="true" xs={12}>
                            <Header />
                        </Grid>
                    </Grid>

                </Box>
                
             </Container>

             <Box style={stylePaper} sx={{position:"relative" , height:"100vh"}} >

                <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }} >
                        <Grid item="true" xs={12} md={12} 
                       >

                        <Stack  spacing={{ xs: 3, sm: 2, md: 4 }}
                                direction={{ xs: 'row' ,md:"column", sm: 'row' }} justifyContent="center" alignItems="center"
                                sx={{
                                    color:"#fff",
                                    pt:20,
                                    pb:20
                                }}
                                >
                                <Typography variant='h3'>Tongna Cottage Natural Resort</Typography>
                                <Typography paragraph sx={{fontSize:18}}>สามารถเข้าไปดูรายละเอียดห้องพักท่ามกลางธรรมชาติ มีห้องนอนและพื้นที่ใช้สอย
                                                        กว้างขวางซึ่งเต็มไปด้วยความรู้สึกของธรรมชาติ ความใกล้ชิด และความโรแมนติก
                                </Typography>

            
                        </Stack>
                        <Stack 
                            spacing={2}
                            direction="row"
                        >
                        <Fab color="primary" aria-label="back" onClick={btnBack}>
                            <ArrowBackIcon />
                        </Fab>
                        <Fab color="primary" aria-label="next" onClick={btnNext}>
                            <ArrowForwardIcon />
                        </Fab>
                        <Typography variant='h5' sx={{color:"#fff" , pt:1.5 , pb:1}}>{count}/3</Typography>
                        </Stack>


                        </Grid>
                </Grid>

                
            </Container>

            </Box>
          
            <Container>
                    <Grid container spacing={2} sx={{pb:"20px"}}>
                        <Grid item="true" md={12}>
                                {/**ตอนเป็น mobile version ปุ่นนี้หายไป */}
                                <Button variant="contained" color="warning" sx={{fontSize:"22px",float:"right"}}>Book Rooms Now!</Button>
                            
                        </Grid>
                    </Grid>
            </Container>
        </Box>

  )
}

export default HeaderTop