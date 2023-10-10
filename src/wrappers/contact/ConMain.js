import React  , {useState} from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip , TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function ConMain() {
  return (
        <Box
        sx={{
        display: 'flex',
        }}
        >
             <Container>
                <Grid container spacing={3}   sx={{mt:5 , mb:5}}>
                    <Grid item="true" xs={12} md={4}>
                         <Stack spacing={3} sx={{textAlign:"center" , background:"#F5F5F5",boxShadow: "0 0px 10px 0px rgb(0 0 0 / 10%)" , transformStyle: "preserve-3d"}}>
                            <Typography variant='h5' >Address</Typography>
                            <Typography paragraph>200 หมู่6 ตำบล ขุนคง อำเภอหางดง, ตำบล ขุนคง, หางดง, จังหวัดเชียงใหม่, ไทย</Typography>
                         </Stack>
                    </Grid>
                    <Grid item="true" xs={12} md={4}>
                        <Stack spacing={3} sx={{textAlign:"center", background:"#F5F5F5",boxShadow: "0 0px 10px 0px rgb(0 0 0 / 10%)" , transformStyle: "preserve-3d" , pb:3}}>
                            <Typography variant='h5' >Phone</Typography>
                            <Typography paragraph>061 – 154 – 5053</Typography>
                         </Stack>
                    </Grid>
                    <Grid item="true" xs={12} md={4} >
                        <Stack spacing={3} sx={{textAlign:"center" , background:"#F5F5F5",boxShadow: "0 0px 10px 0px rgb(0 0 0 / 10%)" , transformStyle: "preserve-3d"  , pb:3}}>
                            <Typography variant='h5' >Email</Typography>
                            <Typography paragraph>reception.tongna@gmail.com</Typography>
                         </Stack>
                    </Grid>
                </Grid>
                <Divider sx={{mt:5 , mb:5}}>
                    <Chip label="Contact" sx={{fontSize:24}} />
                </Divider>
              
                <Grid container spacing={3} sx={{background:"#e9f2fa" , p:2}}>
                    
                    <Grid item="true" xs={12} md={6} >
                         <TextField label="Name "  variant="filled" fullWidth/>
                     </Grid>
                     <Grid item="true" xs={12} md={6} >
                         <TextField label="Email"  variant="filled" fullWidth/>
                     </Grid>
                     <Grid item="true" xs={12} md={12} >
                         <TextField 
                         label="Message" 
                         variant="filled" 
                         multiline
                         rows={4}
                         fullWidth/>
                     </Grid>
                     <Grid item="true" xs={12} md={12} >
                         <Button variant="contained" style={{background:"#d9d0bd" , color:"#000"}}>ส่งข้อมูล</Button>
                     </Grid>
                  
                </Grid>

                <Stack 
                    direction="row" 
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{mt:5 , mb:5}}
                    
                    >
                            <IconButton size="large">
                                <FacebookIcon  />
                            </IconButton>
                            <IconButton size="large">
                                <FacebookIcon  />
                            </IconButton>
                            <IconButton size="large">
                                <FacebookIcon  />
                            </IconButton>
                            <IconButton size="large">
                                <FacebookIcon  />
                            </IconButton>

                </Stack>
             
               
             </Container>
            
        </Box>
  )
}

export default ConMain