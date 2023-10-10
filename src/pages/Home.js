import React , {useContext , useEffect , useState} from 'react';
import DataContext from '../context/DataContext';
import { ThemeProvider } from '@mui/material/styles';
import { Link , useNavigate } from 'react-router-dom';
import HeaderTop from '../wrappers/navbar/HeaderTop';
import SectionWelcome from '../wrappers/home/SectionWelcome';
import SectionRoom from '../wrappers/home/SectionRoom';
import SectionExper from '../wrappers/home/SectionExper';
import SectionAccom from '../wrappers/home/SectionAccom';
import SectionGallery from '../wrappers/home/SectionGallery';
import SectionBook from '../wrappers/home/SectionBook';
import Footer from '../layouts/Footer';



const Home = () => {

    const { theme , styles } = useContext(DataContext);

    const [changeImg , setChangeImg] = useState({key:0  , val:styles.paperContainer});

    const [updateImg , setUpdateImg] = useState(0);

    const [switchImg , setSwitchImg] = useState(false);

    useEffect(() => 
    {
        let callSuccess = true;

        if(updateImg === 2){

            setChangeImg({key:1  , val:styles.paperContainer2})

        }
        else if(updateImg === 3){

            setChangeImg({key:2  , val:styles.paperContainer3})
        }
        else{

            setChangeImg({key:0  , val:styles.paperContainer})
        }

        return () => {

            setSwitchImg(false);
            callSuccess = false;

        }


    }
    ,[switchImg])

   

    return (<ThemeProvider theme={theme}>
               <HeaderTop stylePaper={changeImg.val} setUpdateImg={setUpdateImg} setSwitchImg={setSwitchImg} />
               <SectionWelcome />
               <SectionRoom />
               <SectionExper />
               <SectionAccom />
               <SectionGallery />
               <SectionBook />
               <Footer />
            </ThemeProvider>)

}

export default Home