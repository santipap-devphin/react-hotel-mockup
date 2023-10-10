import React , {useContext} from 'react';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack , Typography } from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import ExpMain from '../wrappers/experience/ExpMain';
import Footer from '../layouts/Footer';

const Experience = () => {

  const { theme , styles } = useContext(DataContext);

  return (<>
            <ThemeProvider theme={theme}>
                    <Header />
                    <Stack>
                        <Mainbreadcrumb page={"Experience"}  />
                        <ExpMain />
                    </Stack>
                    <Footer />
            </ThemeProvider>
        </>);
}

export default Experience;
