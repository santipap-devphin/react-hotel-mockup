import React  , {useState} from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const LocalteMain = () =>  {

    const [openAcc , setOpenAcc] = useState('panel1a-header');

    const handleChangeAcc = (id) => {

        setOpenAcc(id)

    }

  return (<>
            <Box
                sx={{
                display: 'flex',
                 }}
                >
                    <Container>

                        <Typography variant='h4' sx={{pt:"20px"}}>ตำแหน่งที่ตั้งเป็นเอกลักษณ์  <Chip label="จุดเด่น" color="primary" sx={{fontSize:18}} /></Typography>
                        <Grid container spacing={2}>
                            <Grid item="true" xs={12} md={6} sx={{mt:5 , mb:5}}>
                                <img src="../../image/locationimg.jpg" style={{width:"100%"}} />
                            </Grid>
                            <Grid item="true" xs={12} md={6} sx={{mt:5 , mb:5}}>
                                    <Accordion sx={{mb:1}} expanded={openAcc === "panel1a-header"} onChange={() => handleChangeAcc('panel1a-header')}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography sx={{fontSize:22}}>ความเป็นมา โต้งนา คอทเทจ เนเชอรัล รีสอร์ท</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{mb:1}} expanded={openAcc === "panel2a-header"} onChange={() => handleChangeAcc('panel2a-header')}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography sx={{fontSize:22}}>การเดินทางสะดวก</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{mb:1}} expanded={openAcc === "panel3a-header"} onChange={() => handleChangeAcc('panel3a-header')}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                        >
                                        <Typography sx={{fontSize:22}}>ข้อมูลที่พัก</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                
                                   
                                </Grid>
                            </Grid>
                            
                        </Container>
                        
                    </Box>
                    <Box 
                                sx={{display: 'flex' , background:"#e9f2fa"}}
                            >
                            <Container>
                                 <Typography variant='h3' sx={{textAlign:"center" , mt:5}}>ติดต่อเรา</Typography>
                                <Grid container spacing={2}>

                                        <Grid item="true" xs={12} md={4} sx={{mt:5 , mb:10}}>
                                            <img src="../../image/mapimg.jpg" style={{width:"90%" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d"}} />
                                        </Grid>
                                        <Grid item="true" xs={12} md={4} sx={{mt:5 , mb:5}}>
                                                <Stack sx={{ boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , background:"#fff" , p:2 }}>
                                                    <Typography variant='h3'>โรงแรม</Typography>
                                                    <Typography paragraph>
                                                        200 Moo 6 Khun Khong, Hang Dong District, Chiang Mai 50230
                                                    </Typography>
                                                    <Divider />
                                                    <Typography variant='h6'>โทร 000-0000-000</Typography>
                                                    <Typography variant='h6'>อีเมล์ test@gmail.com</Typography>
                                                </Stack>
                                                
                                            
                                        </Grid>
                                        <Grid item="true" xs={12} md={4} sx={{mt:5 , mb:5}}>
                                                <Stack sx={{ boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , background:"#fff" , p:2 }}>
                                                    <Typography variant='h3'>คาเฟ่ </Typography>
                                                    <Typography paragraph>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    </Typography>
                                                    <Divider />
                                                    <Typography variant='h6'>โทร 000-0000-000</Typography>
                                                    <Typography variant='h6'>อีเมล์ test@gmail.com</Typography>
                                                </Stack>
                                            
                                        </Grid>

                                </Grid>
                            </Container>
                            </Box>
                </>
  )
}

export default LocalteMain