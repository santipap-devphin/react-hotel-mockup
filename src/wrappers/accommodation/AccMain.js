import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import BoxExper from '../../component/BoxExper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CardAccom from '../../component/CardAccom';


const AccMain = () =>{

return <>
            <Box
            sx={{
            display: 'flex',
            
            }}
            >
                <Container>
                        <Grid container spacing={2} sx={{p:"50px"}}>
                                <Grid item="true" md={4}>
                                    <CardAccom />

                                </Grid>
                              
                        </Grid>
                        
                </Container>
            </Box>
          </>

}

export default AccMain;
