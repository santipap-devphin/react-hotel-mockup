import React ,{useState} from 'react';
import Box from '@mui/material/Box';
import { Button , Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const BoxExper = ({id , title , txtdes}) => {

  const [expanded, setExpanded] = useState('');

  const mouseEnter = (panel) => {
    console.log('in');
    setExpanded(panel)
  }
  const mouseLeave = () =>{

    setExpanded('')
  }

  return (
    <>
  
    <Box
        sx={{
        boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d",
        position:"relative",
        minHeight:"550px",
        cursor:"pointer",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${'../../image/hightlight.jpg'})`,
        '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
        },
        }
        
      }
      onMouseEnter={(e) => mouseEnter(id)} onMouseLeave={mouseLeave} >

        <Box sx={{ position:"absolute" , bottom:2 , width:"95%" , p:"2.5%" }}>
        <Accordion expanded={expanded === id} sx={{p:1}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {txtdes}
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Box>
     </Box>
    </>
  )
}

export default BoxExper
