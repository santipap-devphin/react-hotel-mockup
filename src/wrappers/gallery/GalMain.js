import React , {useCallback, useEffect, useRef, useState} from 'react';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip 
  , ImageList , ImageListItem , ImageListItemBar , ListSubheader , IconButton } from "@mui/material";
  import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Gallery} from 'react-photoswipe-gallery'
import GalleryImg from '../../component/GalleryImg';




const GalMain = () => {

    const [statusRecall , setStatusRecall] = useState(false);
    const [addClassColumn , setAddClassColumn] = useState('');

    useEffect ( () => {

      if(statusRecall)
      setAddClassColumn('gallery__column');
      setStatusRecall(false)
   


    },[statusRecall])

    const smallItemStyles =  React.CSSProperties = {
      cursor: 'pointer',
      objectFit: 'cover',
      width: '100%',
      maxHeight: '100%',
    }

     const [items, setItems] = useState([
        {
          id: '1',
          size: '900-900',
          src: 'https://source.unsplash.com/_cvwXhGqG-o/900x900',
          thumb:
            'https://source.unsplash.com/_cvwXhGqG-o/300x300',
          
        },
        {
          id: '2',
          size: '600-1000',
          src: 'https://source.unsplash.com/AHBvAIVqk64/600x1000',
          thumb:
            'https://source.unsplash.com/AHBvAIVqk64/300x500',
          
        },
        {
          id: '3',
          size: '900-900',
          src: 'https://source.unsplash.com/VLPLo-GtrIE/900x900',
          thumb:
            'https://source.unsplash.com/VLPLo-GtrIE/300x300',
         
        },
        {
          id: '4',
          size: '900-900',
          src: 'https://source.unsplash.com/A9rQeI2AdR4/900x900',
          thumb:
            'https://source.unsplash.com/A9rQeI2AdR4/300x300',
         
        } ,
        {
          id: '5',
          size: '900-900',
          src: 'https://source.unsplash.com/dnL6ZIpht2s/900x900',
          thumb:
            'https://source.unsplash.com/dnL6ZIpht2s/300x300',
         
        },
        {
          id: '6',
          size: '600-1000',
          src: 'https://source.unsplash.com/vp9mRauo68c/600x1000',
          thumb:
            'https://source.unsplash.com/vp9mRauo68c/300x500',
         
        },
        {
          id: '7',
          size: '600-1000',
          src: 'https://source.unsplash.com/Xm9-vA_bhm0/600x1000',
          thumb:
            'https://source.unsplash.com/Xm9-vA_bhm0/300x500',
         
        },
        {
          id: '8',
          size: '900-900',
          src: 'https://source.unsplash.com/NTjSR3zYpsY/900x900',
          thumb:
            'https://source.unsplash.com/NTjSR3zYpsY/300x300',
         
        }
        ,
        {
          id: '9',
          size: '900-900',
          src: 'https://source.unsplash.com/2JH8d3ChNec/900x900',
          thumb:
            'https://source.unsplash.com/2JH8d3ChNec/300x300',
         
        },
        {
          id: '10',
          size: '900-900',
          src: 'https://source.unsplash.com/sh3LSNbyj7k/900x900',
          thumb:
            'https://source.unsplash.com/sh3LSNbyj7k/300x300',
         
        },
        {
          id: '11',
          size: '900-900',
          src: 'https://source.unsplash.com/OQd9zONSx7s/900x900',
          thumb:
            'https://source.unsplash.com/OQd9zONSx7s/300x300',
         
        }
        ,{
          id: '12',
          size: '600-1000',
          src: 'https://source.unsplash.com/XZkEhowjx8k/600x1000',
          thumb:
            'https://source.unsplash.com/XZkEhowjx8k/300x500',
         
        } 
      ]);


       const getItems = useCallback(() => {

        return items.map((item) => {
          return (
            <a
              key={item.id}
              data-lg-size={item.size}
              className="gallery-item"
              data-src={item.src}
            >
              <img
                style={{ maxWidth: '280px' , cursor:"pointer" }}
                className="img-responsive"
                src={item.thumb}
              />
            </a>
          );
        });
      }, [items]);

    



  return (<>
            <Box
            sx={{
            display: 'flex',
            m:2,
            }}
            >
              
                <Container>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }}>
                  
                       <Gallery>
                          {
                                items.slice(0,9).map((item , keys) => {

                                  return  <Grid key={keys}  item="true" xs={12} sm={6} md={4} ><GalleryImg originalImg={item.src} thumbnailImg={item.thumb} itemWidth={900} itemHeight={900} /></Grid>
                                })
                          }
                        </Gallery>

                   
                
                </Grid>
             
              
                </Container>
              
            </Box>
         </>)
}

export default GalMain