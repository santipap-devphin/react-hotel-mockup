import React , {useContext} from 'react';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack , Typography } from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import LocalteMain from '../wrappers/location/LocalteMain';
import Footer from '../layouts/Footer';

const Location = () =>  {

  const { theme , styles } = useContext(DataContext);

  return (<ThemeProvider theme={theme}>
                <Header />
                <Stack>
                     <Mainbreadcrumb page={"Location"}  />
                     <LocalteMain />
                </Stack>
                <Footer />
            </ThemeProvider>
            )
}

export default Location;
