import React , {useContext} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack , Typography } from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import ActDetail from '../wrappers/activity/ActDetail';
import Footer from '../layouts/Footer';

const EventDetail = () => {

    const { theme} = useContext(DataContext);

    const {slug} = useParams();

    return (<>
                <ThemeProvider theme={theme}>
                        <Header />
                        <Stack>
                            <Mainbreadcrumb page={slug}  />
                            <ActDetail />
                        </Stack>
                        <Footer />
                </ThemeProvider>
            </>)
}

export default EventDetail