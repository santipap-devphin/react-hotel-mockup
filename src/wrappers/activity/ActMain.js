import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip , FormGroup , FormControlLabel , Checkbox } from "@mui/material";
import CardActivity from '../../component/CardActivity';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



const ActMain = () =>{

return <>
            <Box
            sx={{
            display: 'flex',
            pt:5 , pb:5
            }}
            >
                <Container>
                <Grid container spacing={3}>
                        <Grid item="true" xs={12} md={3} sx={{display: { xs: 'none', md: 'flex' } , pt:3 , pb:3}} >
                                <Stack spacing={2} sx={{color:"#000"}}>
                                        <Typography variant='h6'>Categories</Typography>
                                                <FormGroup>
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="lorem ipsum" />
                                                        <FormControlLabel control={<Checkbox  />} label="lorem ipsum" />
                                                        <FormControlLabel control={<Checkbox  />} label="lorem ipsum" />
                                                        <FormControlLabel control={<Checkbox  />} label="lorem ipsum" />
                                                </FormGroup>
                                                <Typography variant='h6' sx={{pt:2 , pb:2}}>Tag</Typography>
                                        <Stack direction="row" spacing={1}>

                                                <Chip label="Blank" />
                                                <Chip label="Blank" />
                                        </Stack>
                    
                                </Stack>
                        </Grid>
                        <Grid item="true" xs={12} md={9} sx={{pt:3 , pb:3}}>
                                <Stack sx={{p:2 , color:"#000"}} direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 4, md: 12 }}>
                                         <Grid container spacing={2}>
                                                <Grid item="true" xs={12} md={4}>
                                                        <CardActivity />
                                                </Grid>
                                                <Grid item="true" xs={12} md={4}>
                                                        <CardActivity />
                                                </Grid>
                                                <Grid item="true" xs={12} md={4}>
                                                        <CardActivity />
                                                </Grid>
                                        </Grid>
                                </Stack>
                        </Grid>
                </Grid>
                       
                        
                </Container>
            </Box>
          </>

}

export default ActMain;
