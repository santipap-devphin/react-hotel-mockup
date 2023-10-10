import React , {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ActLeftDetail from './ActLeftDetail';
import ActRightDetail from './ActRightDetail';

const ActDetail = () =>  {
  return (
    <Box sx={{pt:5 , pb:5}}>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} sx={{display: { xs: 'none', md: 'flex' }}} >
                    <ActLeftDetail/>
                </Grid>
                <Grid item xs={12} md={9}>
                        <Grid container spacing={6}>  
                                <Grid item xs={12} md={12}>
                                     <ActRightDetail />
                                </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default ActDetail