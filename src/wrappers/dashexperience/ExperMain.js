import React , {useEffect , useState} from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ExperList from './ExperList';


function ExperMain() {

    const [statusCallApi , setStatusCallApi]= useState(true);
    const [listProduct , setListProduct] = useState([]);
    const [prvListProduct , setPrvListProduct] = useState([]);
    const [dataSuccess , setDataSuccess] = useState(false);
    const [pages , setPages] = useState(1);
    const [searchData , setSearchData] = useState('');
    const [nextPage , setNextPage] = useState(1);

    const locateAdd = () => {

        window.location = "/backend/experience/add"
      }

     const changePage = () => {


     }
     const searchVal = (e) => {

        var vals = e.target.value;

     }

  return (<Box
          sx={{
            m:1,
            p:1,
            width: "99%",
            backgroundColor: 'transparent',
           
            }}
            >
            <Grid container spacing={2} >
                    <Grid item xs={12} sm={11} sx={{mt:1 , mb:2}}>
                        <TextField
                          label="ค้นหา"
                          id="filled-start-adornment"
                          InputProps={{
                              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                          }}
                          size="small"
                          variant="filled"
                          value={searchData}
                          onChange={searchVal}
                          fullWidth
                          />
                    </Grid>
                    <Grid item xs={12} sm={1} sx={{mt:1 , mb:2}}>
                        <Button variant="contained" color="info" sx={{height:48}} onClick={locateAdd}><AddIcon/>เพิ่ม</Button>
                    </Grid>
            </Grid>
            <ExperList />
            <Stack spacing={2} sx={{mt:3}} alignItems="center">
                    <Pagination count={pages} color="primary" onChange={changePage} />
            </Stack>

          </Box>
  )
}

export default ExperMain