import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import CardRoom from '../../component/CardRoom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const SectionRoom = () => {

    return (<Box
        sx={{
        display: 'flex',
        background:"#f9f8f7"
        }}
        >
         <Container>
                    <Grid container spacing={2} sx={{pt:"20px" ,pb:"20px"}}>
                        <Grid item="true" md={8}>
                            <Stack>
                              
                                <Typography variant='h4' sx={{color:"#049899"}}>Accommodation</Typography>
                                <Typography>สามารถเข้าไปดูรายละเอียดห้องพักท่ามกลางธรรมชาติ มีห้องนอนและพื้นที่ใช้สอย กว้างขวางซึ่งเต็มไปด้วยความรู้สึกของธรรมชาติ ความใกล้ชิด และความโรแมนติก</Typography>

                            </Stack>      
                        </Grid>
                        <Grid item="true" md={4}>
                             <Button variant="outlined" sx={{fontSize:"18px" , float:"right"}}>รายละเอียดเพิ่มเติม</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{pt:"20px" ,pb:"20px"}}>
                            <Grid item="true" md={4}>
                                    <CardRoom />
                            </Grid>
                            <Grid item="true" md={4}>
                                    <CardRoom />
                            </Grid>
                            <Grid item="true" md={4}>
                                    <CardRoom />
                            </Grid>
                    </Grid>
                    
                 </Container>  
            </Box>)

}

export default SectionRoom;