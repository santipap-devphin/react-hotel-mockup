import React from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const srcset = (image, width, height, rows = 1, cols = 1) => {

    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
          height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
      };


}

const SectionGallery = () => {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
        },
       
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          featured: false,
        },
       
      ];



return (<Box
            sx={{
            display: 'flex',
            backgroundColor:"#f9f8f7",
            /*backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
            */
            }}
            >
                 <Container>
                 <Grid container spacing={2} sx={{pt:"30px" ,pb:"30px"}}>
                            <Grid item="true" md={12} sx={{textAlign:"center"}}>
                                <Stack>
                                    <Typography variant='h4' sx={{color:"#049899"}}>Gallery</Typography>
                                    <Typography>รูปภาพโรงแรม พร้อมสถานที่พักผ่อน สามารถเข้าไปดูรูปต่าง ๆ ของโรงแรมได้แล้ววันนี้ คลิกเลยที่นี่</Typography>
                                </Stack>      
                            </Grid>
                           
                        </Grid>
                    <Grid container spacing={2} sx={{pb:"20px"}}>
                        <Grid item="true" md={12}>
                            <ImageList
                                sx={{
                                   
                                    // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                                    transform: 'translateZ(0)',
                                }}
                               
                                gap={1}
                                >
                                {itemData.map((item) => {
                                    const cols = item.featured ? 2 : 1;
                                    const rows = item.featured ? 2 : 1;

                                    return (
                                    <ImageListItem key={item.img} cols={cols} rows={rows}>
                                        <img
                                        {...srcset(item.img, 250, 200, rows, cols)}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        sx={{
                                            background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        }}
                                        title={item.title}
                                        position="top"
                                        actionIcon={
                                            <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${item.title}`}
                                            >
                                            <StarBorderIcon />
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                        />
                                    </ImageListItem>
                                    );
                                })}
                                </ImageList>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{mt:"10px" ,mb:"30px"}}>
                        <Grid item="true" md={12} sx={{textAlign:"center"}}>
                            <Button variant="outlined"  sx={{fontSize:"18px"}}>รายละเอียดเพิ่มเติม</Button>
                         </Grid>
                    </Grid>
                  
                </Container>
            
            </Box>)

}

export default SectionGallery;