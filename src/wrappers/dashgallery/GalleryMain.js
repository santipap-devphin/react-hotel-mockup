import React , {useState  , useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Grid  , Stack , Button  , TextField  , InputAdornment , Pagination}  from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import GalList from './GalList';

const GalleryMain = () => {

    const [statusCallApi , setStatusCallApi] = useState(false);
    const [searchData , setSearchData] = useState('');
    const [listCoupon , setListCoupon] = useState([]);
    const [prvCoupon , setPrvCoupon] = useState([]);
    const [pages , setPages] = useState(1);
    const [prvPage , setPrvPage] = useState(1);

    useEffect(() => {

    
      },[])

    const changePage = (e , value) => {
         //console.log(value);
        setPrvPage(value)
    }
    const changeSearch = (e) => {
        
    
        
      }

  return (<>
                <Stack spacing={1} sx={{m:1}} direction="row">
                    <Typography variant='h6' sx={{color:"#000"}}>Gallery</Typography>
                    <Link to={"/backend/gallery/add"} style={{textDecoration: "none"}}><Button variant="contained" color="info"><AddIcon /> เพิ่มข้อมูล</Button></Link>
                </Stack>
                <Grid container sx={{m:1}}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                            label="ค้นหา"
                            id="searchcoupon"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                            }}
                            size="small"
                            variant="filled"
                            value={searchData}
                            onChange={changeSearch}
                            fullWidth
                            />
                        </Grid>
                </Grid>
                <Grid container spacing={2}>
                      <GalList />
                </Grid>
                <Stack spacing={2} sx={{mt:1}} alignItems="center">
                        <Pagination count={pages} color="primary" onChange={changePage} />
                </Stack>
            </>
  )
}

export default GalleryMain