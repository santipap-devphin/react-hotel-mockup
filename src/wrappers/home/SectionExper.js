import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import BoxExper from '../../component/BoxExper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const SectionExper = () => {

    return (
        <Box
            sx={{
            display: 'flex',
            
            }}
            >
            <Container>
                        <Grid container spacing={2} sx={{pt:"20px" ,pb:"20px"}}>
                            <Grid item="true" md={8}>
                                <Stack>
                                    <Typography variant='h4' sx={{color:"#049899"}}>Hightlight Event</Typography>
                                    <Typography>เชื่อว่าหลายคนก็ชอบติดตามการรีวิวที่ท่องเที่ยวเจ๋ง ๆ บล็อกเกอร์ของเราจะช่วยแนะนำรีวิวที่เที่ยวดีๆ แล้ว ยังเชื่อว่าบล็อกรีวิวเหล่านี้จะเป็นแรงบันดาลใจให้หลายๆ คนได้เริ่มออกเดินทาง</Typography>
                                </Stack>      
                            </Grid>
                            <Grid item="true" md={4}>
                                <Button variant="outlined" sx={{fontSize:"18px" , float:"right"}}>รายละเอียดเพิ่มเติม</Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{pt:"20px" ,pb:"20px"}}>
                            <Grid item="true" xs={12} sm={6} md={4} lg={4} xl={4}>
                                 <BoxExper id="panel1" title="Break Fast" txtdes="อาหารเช้าเป็นมื้อที่สำคัญที่สุด ชุดอาหารเช้าสุดพิเศษจะพร้อมเสิร์ฟ ในเวลาที่คุณต้องการ"/>
                            </Grid>
                            <Grid item="true" xs={12} sm={6} md={4} lg={4} xl={4}>
                                 <BoxExper id="panel2" title="Dining" txtdes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat."/>
                            </Grid>
                            <Grid item="true" xs={12} sm={6} md={4} lg={4} xl={4}>
                                 <BoxExper id="panel3" title="Photography" txtdes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat." />
                            </Grid>
                          
                        </Grid>
                        
                    </Container>  
                </Box>
        )
}

export default SectionExper
