import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import BoxExper from '../../component/BoxExper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



const ExpMain = () =>{
{/* Event mountenter ไม่ทำงานใน mobile version อาจแก้ปัญหาโดยการใช้ use mediaquery ในการเช้คว่าเป็น mobile version หรือเปล่า เพื่อแสดง  box ที่ต่างไป */}
return <>
            <Box
            sx={{
            display: 'flex',
            m:5
            }}
            >
                <Container>
                        <Grid container spacing={2} sx={{p:"10px"}}>

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
          </>

}

export default ExpMain;
