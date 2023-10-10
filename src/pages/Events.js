import React , {useContext} from 'react';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack , Typography } from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import ActMain from '../wrappers/activity/ActMain';
import Footer from '../layouts/Footer';

const Events = () => {

    const { theme , styles } = useContext(DataContext);

    return (<>
                <ThemeProvider theme={theme}>
                        <Header />
                        <Stack>
                            <Mainbreadcrumb page={"Events"}  />
                            <ActMain />
                        </Stack>
                        <Footer />
                </ThemeProvider>
            </>)

}

export default Events