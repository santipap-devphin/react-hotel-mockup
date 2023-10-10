import React , {useContext} from 'react';
import Header from '../wrappers/navbar/Header';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Stack , Typography } from '@mui/material';
import Mainbreadcrumb from '../layouts/Mainbreadcrumb';
import LoginMain from '../wrappers/login/LoginMain';
import Footer from '../layouts/Footer';


const Login = () =>  {
    const { theme , styles } = useContext(DataContext);

    return (<ThemeProvider theme={theme}>
                  <Header />
                  <Stack>
                       <Mainbreadcrumb page={"Login"}  />
                       <LoginMain />
                  </Stack>
                  <Footer />
              </ThemeProvider>
              )
}

export default Login