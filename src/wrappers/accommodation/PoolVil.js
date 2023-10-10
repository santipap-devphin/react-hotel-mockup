import React, {useState} from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import WifiIcon from '@mui/icons-material/Wifi';
import ChairIcon from '@mui/icons-material/Chair';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import DeckIcon from '@mui/icons-material/Deck';
import { Gallery} from 'react-photoswipe-gallery';
import GalleryImg from '../../component/GalleryImg';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';



const PoolVil = ({adults  , size , amenities , facilities , roomdetail ,  listImg}) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const chkIcon  = (vals) => {

    let obj = {};

    if(vals === "ไวไฟ"){
        obj = <WifiIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }else if(vals === "ที่จอดรถ"){
        obj = <LocalParkingIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }
    else if(vals === "อาหารและเครื่องดื่ม"){
        obj = <RestaurantIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }
    else if(vals === "สระว่ายน้ำส่วนตัว"){
        obj = <PoolIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }
    else if(vals === "ห้องนั่งเล่น"){
        obj = <ChairIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }
    else if(vals === "เก้าอี้อาบแดด"){
        obj = <DeckIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }
    else{
        obj = <ContactSupportIcon sx={{ mr: 0.5 }} fontSize="inherit" />;
    }
 
       console.log(obj)
       return obj;

  }
 return (
    <>
        <Box
            sx={{
            display: 'flex',
            
            }}
            >
                {
                  listImg.length > 0 ?

                  <Container>
                  <Grid container spacing={2} sx={{p:"20px"}} >
                         <Grid item="true" md={8}  >
                         <Gallery>
                         <Swiper
                                 style={{
                                 '--swiper-navigation-color': '#fff',
                                 '--swiper-pagination-color': '#fff',
                                 }}
                                 loop={true}
                                 spaceBetween={10}
                                 navigation={true}
                                 thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                 modules={[FreeMode, Navigation, Thumbs]}
                                 className="mySwiper2"
                             >
                                 {
                                         listImg.map((item , keys) => {

                                         return  <SwiperSlide key={item.id}>
                                                   <GalleryImg originalImg={item.src} thumbnailImg={item.thumb} itemWidth={1344} itemHeight={896} />{/** ขนาดรูประหว่าง Zoom */}
                                                 </SwiperSlide>
                                         })
                                        
                                 }
                               </Swiper>
                              </Gallery>
                            
                             <Swiper
                             
                                 onSwiper={setThumbsSwiper}
                                 loop={true}
                                 spaceBetween={10}
                                 slidesPerView={4}
                                 freeMode={true}
                                 watchSlidesProgress={true}
                                 modules={[FreeMode, Navigation, Thumbs]}
                                 className="mySwiper"
                             >
                                  {  listImg.map((item , keys) => {

                                           return  <SwiperSlide key={item.id}><img src={item.src} style={{width:"100%", height:150}} alt={"imgdata " + keys}/></SwiperSlide>
                                       })
                                  }
                             </Swiper>
                            
                            <Stack spacing={2}>
                             {
                                 <div dangerouslySetInnerHTML={{ __html:roomdetail}} />
                             }
                            </Stack>
                         </Grid>
                         <Grid 
                         item="true" 
                         md={4}
                         >
                         <Stack
                                 direction="row"
                                 justifyContent="center"
                                 alignItems="center"
                                 divider={<Divider orientation="vertical" flexItem />}
                                 spacing={6}
                                 sx={{background:"#fff",boxShadow: "0 0px 10px 0px rgb(0 0 0 / 10%)" , transformStyle: "preserve-3d" , p:2}}
                                 >
                         <Typography variant='p'>Adults : {adults}</Typography>
                         <Typography variant='p'>Size : {size} m²</Typography>
                         </Stack>
                         <Stack spacing={2} 
                         sx={{background:"#F5F5F5",boxShadow: "0 0px 10px 0px rgb(0 0 0 / 10%)" , transformStyle: "preserve-3d" , p:2 , mt:1}}
                         >
                              <Typography variant='h5'>AMENITIES</Typography>
                            
                            
                            {
                                amenities.length > 0 ?
                                amenities.map((itm , keys) => {

                                    return  <Typography key={keys}
                                                sx={{ display: 'flex', alignItems: 'center' , fontSize:16 }}
                                                color="text.primary"
                                            >  
                                               {
                                                    chkIcon(itm)
                                               }

                                               {itm}
                                            </Typography>

                                            })
                                            :null
                            }
                             <Typography variant='h5'>VILLA FACILITIES</Typography>
                             <Box
                                 sx={{ display: 'flex', alignItems: 'center' , fontSize:16 }}
                                 color="text.primary"
                              >  
                              <ul style={{marginTop:"0px"}}>
                              {
                                facilities.length > 0 ?

                                facilities.map((ele , keys) => {

                                    return  <li key={keys}>{ele}</li>

                                })
                                :null
                              }
                              </ul>
                             </Box>
                           
                         </Stack>
                         <Stack spacing={2}>
                             <Button variant="contained" color="warning" sx={{fontSize:20}}>จองห้องพักนี้</Button>
                         </Stack>
                        </Grid>
                 </Grid>
               </Container>


                  :null
                }
               
     </Box>
         
      
    </>
  )
}

export default PoolVil