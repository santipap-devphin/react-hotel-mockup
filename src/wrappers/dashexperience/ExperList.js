import React , {useState , useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import endpoint from '../../api/endpoint';
import CardExperience from '../../component/CardExperience';

const ExperList = () => {
 
 
   const [chkStatus , setChkStatus] = useState(false);
   const [experList , setExperList] = useState([]);
   const [experCatename , setExperCatename] = useState([]);
   const [statusCompleate, setStatusCompleate] = useState(false);


   useEffect(() => {

    let callSuccess  = true;

    const reqRequest = async () => {


        try {

            const response = await Promise.all([endpoint.get("/experience/content") , endpoint.get("/experience/type")])
            console.log(response)
            if(response.length === 2){
                
                setExperList(response[0].data.list);
                setExperCatename(response[1].data.list)
                setChkStatus(true)
            }
          
            
        } catch (err) {
             console.error(err)
        }



    }

    if(callSuccess){

        reqRequest();

    }

    return () => {

        callSuccess = false;

    }

  },[statusCompleate])

  const fetData = (vals) => {

    let valueNew = "";
    experCatename.forEach((ele) => {
    if(ele.experid ===  vals){
         valueNew = ele.expernameen;
    }
  
    })

    return valueNew;

  }
  
  return ( <Grid container spacing={2}>

                    {
                        chkStatus &&  experList.length > 0 ?
                        experList.map((val , keys) => {

                             return <Grid key={keys} item xs={12} sm={6}>
                                        <CardExperience 
                                            exID={val.experID} 
                                            exTitle={val.experTitle} 
                                            exDate={val.experTitle} 
                                            exImg={val.experThumb} 
                                            exCate={fetData(val.experCate)} 
                                            exHighlight={val.experHighlight}
                                            setstatusCompleate={setStatusCompleate}
                                            />
                                    </Grid>

                        })
                        
                        : <Grid item xs={12}>
                            <Box sx={{ p: 2, mr:2, border: '1px dashed grey' }}>
                                <Typography variant='h6'>ไม่มีข้อมูล</Typography>
                            </Box>
                         </Grid>
                    }
             </Grid>
    )
}

export default ExperList