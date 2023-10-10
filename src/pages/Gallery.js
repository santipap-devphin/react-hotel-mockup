import React , {useContext} from 'react';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack , Typography } from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import GalMain from '../wrappers/gallery/GalMain';
import Footer from '../layouts/Footer';

const Gallery = () => {

   const { theme , styles } = useContext(DataContext);

  return (<>
            <ThemeProvider theme={theme}>
                    <Header />
                    <Stack>
                        <Mainbreadcrumb page={"Gallery"}  />
                        <GalMain />
                    </Stack>
                    <Footer />
            </ThemeProvider>
            </>
        )
}

export default Gallery