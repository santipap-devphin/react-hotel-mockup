import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import BoxExper from '../../component/BoxExper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const SectionBook = () => {
  return (
    <Box
            sx={{
            display: 'flex',
            
            backgroundImage:`url(${'../../image/imagebook.jpg'})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"top",
            backgroundSize:"cover",
            backgroundAttachment:"fixed",
            position:"relative",
          
                
           
    }}
    > 
   
         <Container >
                <Grid container spacing={2} sx={{pt:"120px" ,pb:"120px"}}>
                    <Grid item="true" md={8} sx={{background:"#F9F8F7",  opacity:0.8}}>
                        <Stack sx={{p:1}}>
                            <Typography variant='h4' sx={{color:"#000" , fontWeight: "bold"}}>Promotion </Typography>
                            <Typography variant='h5' sx={{color:"#000" , fontWeight: "bold"}}>โปรโมชั่น รายการอาหาร และ <u style={{color:"#ed6c02"}}>ราคาห้องพักสุดพิเศษ</u> เพื่อ ดื่มด่ํากับบรรยากาศธรรมชาติ สุดๆ</Typography>
                        </Stack>      
                    </Grid>
                    <Grid item="true" md={4}>
                        <Button variant="contained" color="warning" sx={{fontSize:"24px" , float:"right" , mt:4}}>จองเลย</Button>
                    </Grid>
                </Grid>
             </Container>
   
            
      
        
         </Box>
  )
}

export default SectionBook