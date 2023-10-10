import React , {useContext} from 'react';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack} from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import ConMain from '../wrappers/contact/ConMain';
import Footer from '../layouts/Footer';

const Contact = () =>  {

  const { theme , styles } = useContext(DataContext);

  return (<ThemeProvider theme={theme}>
                <Header />
                <Stack>
                    <Mainbreadcrumb page={"Contact"}  />
                    <ConMain />
                </Stack>
                <Footer />
            </ThemeProvider>
        )
}

export default Contact;
