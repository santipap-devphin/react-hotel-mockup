import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const CardActivity = () => {

    let navicate = useNavigate();

    const goTo = (e) => {

        e.preventDefault();
        navicate("/events/detail");

    }
  
    return (
            <Card sx={{  boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d"  , maxWidth: 270
                 }}>
                 
                    <CardMedia
                    sx={{ 
                        height: 180 ,
                     }}
                    image="../../image/mockroom.jpg"
                    title="green iguana"
                    />
                   
                    <CardContent>
                    <Typography variant='h6'>Wat Phra That Doi Suthep</Typography>
                    <Typography variant="body2" color="text.secondary">
                        เมืองเชียงใหม่นับได้ว่าเป็นเมืองท่องเที่ยวที่มีชื่อเสียงโด่งดังมาอย่างยาวนานทั้งในหมู่นักท่องเที่ยวชาวไทยและชาวต่างชาติ .....
                    </Typography>
                    <Stack 
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{mt:1}}
                        spacing={3}
                       >
                        <Typography variant='p'>July 10, 2023</Typography>
                        <Button variant="outlined" onClick={(e) => goTo(e)}>อ่านต่อ ...</Button> 
                    </Stack>
                    </CardContent>
                    <Divider>
                        <Chip label="Tags" />
                    </Divider>
                    <Stack direction="row" spacing={2} sx={{m:1.5}}>
                        <Chip label="ท่องเที่ยว" color="warning" />
                        
                    </Stack>
                    
                  
               </Card>)

}

export default CardActivity;
