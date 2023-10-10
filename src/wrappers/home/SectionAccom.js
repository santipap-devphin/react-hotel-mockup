import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation } from 'swiper/modules';
import CardPromotion from '../../component/CardPromotion';


const SectionAccom = () => {

    const sizetablet = useMediaQuery('(min-width:768px)');
const sizemobile = useMediaQuery('(max-width:899px)');

    return (<Box
                sx={{
                display: 'flex',
                p:3,
                pt:5,
                pb:5,
                backgroundColor: '#f7f5ef',
                /*'&:hover': {
                    backgroundColor: '#f9f8f7',
                    opacity: [0.9, 0.8, 0.7],
                },*/
                
                }}
                >
                  
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fdbe33",
                                "--swiper-pagination-color": "#fdbe33",
                             }}
                            slidesPerView={sizetablet ? 4 : 1}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{
                            
                            clickable: true,
                            }}
                            modules={[Navigation]}
                            className="swiper"
                        >
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                            <SwiperSlide><CardPromotion /></SwiperSlide>
                        </Swiper>
                   
                 </Box>
            )

}

export default SectionAccom