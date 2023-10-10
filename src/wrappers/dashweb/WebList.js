import React  , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Stack  , Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import endpoint from '../../api/endpoint';


const WebList = () => {

    const [openAcc , setOpenAcc] = useState('panel1a-header');
    const [dataWeb , setDataWeb] = useState([]);
    const [statusCall , setStatusCall] = useState(false);

    useEffect(() => {
     let callSucess =  true;

     const reqWebs = async () => {

        try {
        
            const response = await endpoint.get("/webs/all");
            if(response.data.code === 1){

                setDataWeb(response.data.list);
                setStatusCall(true);
            }

            
        } catch (err) {
            console.error(err)
        }


     }

     if(callSucess){
        reqWebs();
     }



     return () => {

        callSucess =  false;

     }



    },[])

    const handleChangeAcc = (id) => {
        
        console.log(id)
        setOpenAcc(id)

    }
 

  return (<Grid item="true" xs={12} md={12} sx={{m:2}}>

                                    {
                                        statusCall && dataWeb.length > 0 ?

                                        dataWeb.map((ele , keys) => {


                                            return <Accordion key={keys} sx={{mb:1}} expanded={openAcc === `panel${ele.webID}a-header`} onChange={() => handleChangeAcc(`panel${ele.webID}a-header`)} >
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls={`panel${ele.webID}a-content`}
                                                            id="panel1a-header"
                                                        >
                                                            <Stack direction="row" spacing={1}>
                                                                <Typography sx={{fontSize:26}}>{ele.WebTitle}</Typography>
                                                                    <Link to={`/backend/web/edit/${ele.webID}`} style={{textDecoration: "none"}}>
                                                                        <IconButton aria-label="edit" >
                                                                            <EditIcon />
                                                                        </IconButton>
                                                                    </Link>
                                                            </Stack>
                
                                                        </AccordionSummary>

                                                        <AccordionDetails>
                                                            <Stack >

                                                                {
                                                                   <div key={1} dangerouslySetInnerHTML={{ __html:JSON.parse(ele.webDesTh).substring(0,400) + "....." }} />
                                                                }
                                                             
                                                            </Stack>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                 })

                                        :null

                                    }
                                    
                                    <Accordion sx={{mb:1}} expanded={openAcc === "panel2a-header"} onChange={() => handleChangeAcc('panel2a-header')}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Stack direction="row" spacing={1}>
                                                <Typography sx={{fontSize:26}}>Tongna Cottage Natural Resort</Typography>
                                                    <Link to={`/backend/web/edit/${1}`} style={{textDecoration: "none"}}>
                                                        <IconButton aria-label="edit" >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Link>
                                        </Stack>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                      </Grid>
              )
}

export default WebList