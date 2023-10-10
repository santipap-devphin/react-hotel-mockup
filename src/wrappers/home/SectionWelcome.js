import React  , {useState} from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import endpoint from '../../api/endpoint';


const SectionWelcome = () => {

     const [dataLoad , setDataLoad] = useState(false);


     const loadWelcome = async () => {

        
        try {
            const response = await endpoint.get("/");
            console.log(response)
            //setDataLoad(true)
            
        } catch (err) {
            console.error(err)
        }

     }


     loadWelcome();


     return ( <Box
                sx={{
                display: 'flex',
                /*backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                */
                }}
                >
                 <Container>
                    <Grid container spacing={2} sx={{pb:"20px"}}>
                        <Grid item="true" md={7}>
                           
                        <Stack spacing={2}>
                            <Divider>
                                <Chip label="ยินดีต้อนรับเข้าสู่" sx={{fontSize:20 , color:"#fff" , background:"#006F70"}} />
                            </Divider>
                            
                             <Typography variant="h4">Tongna Cottage Natural Resort</Typography>
                             <Typography sx={{lineHeight:"36px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</Typography>
                             
                             <Grid container sx={{pt:"10px",pb:"20px"}}>
                                <Grid item="true" md={4}>
                                <Button variant="contained" color="warning" sx={{fontSize:"22px"}}>เช็คราคาห้องพัก !</Button>
                               </Grid>
                            </Grid>
                             
                           
                            
                        
                        </Stack>
                            
                        </Grid>
                        <Grid item="true" md={5}>
                           
                        <Stack spacing={2}>
                            <img src={'../../image/rightimage.jpg'} />
                        </Stack>
                            
                        </Grid>
                    </Grid>
                 </Container>   
                </Box>
            )

}

export default SectionWelcome;