import React , {Fragment, useContext , useEffect , useState} from 'react';
import {Typography, Grid ,Stack}  from '@mui/material';
import DataContext from '../context/DataContext';
import HeaderDashBoard from '../wrappers/dashboardBack/HeaderDashBoard';
import FooterDashBoard from '../wrappers/dashboardBack/FooterDashBoard';
import MobileDashboard from '../wrappers/dashboardBack/MobileDashboard';
import DeskTopDahBoard from '../wrappers/dashboardBack/DeskTopDahBoard';
import { ThemeProvider } from '@mui/material/styles';

function DrafBackend({titlepage , children}) {

  const {theme , scaleTablet , matches} = useContext(DataContext);

  return (<ThemeProvider theme={theme}>
            <Fragment>
            
                <HeaderDashBoard />
                <Grid container sx={{backgroundColor:"#f5f5f5" ,color:"#000"}}>
                    
                            <Grid item xs={12} md={1} sx={{mt:scaleTablet && !matches ? 0 : 10}}>
                            {
                                scaleTablet && !matches   ? <DeskTopDahBoard /> : <MobileDashboard />
                            }
                            </Grid>
                        
                            <Grid item xs={12} md={11} sx={{mt:matches ? 5 : 10 , backgroundColor:"#f5f5f5" , mt: { xs: 5, sm: 10 }}}>

                                <Stack spacing={2} sx={{ml:matches ? 0 : 10 , mr:matches ? 0 : 5}}>
                                <Typography variant='h6'>{titlepage} </Typography>
                                <hr/>

                                 {children}
                                 <FooterDashBoard />
                                </Stack>
                            </Grid>
                    </Grid>
                    </Fragment>
            </ThemeProvider>
  )
}

export default DrafBackend