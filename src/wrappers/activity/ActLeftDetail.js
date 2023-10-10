import React from 'react';
import { Stack , TextField , InputAdornment , Typography , Chip} from '@mui/material';


const ActLeftDetail = () =>  {
  return (<Stack spacing={2} sx={{color:"#000"}}>
                       
                        
                        <Typography variant='h6' sx={{pt:2 , pb:2}}>Tag</Typography>
                        <Stack direction="row" spacing={1}>

                            <Chip label="Blank" />
                            <Chip label="Blank" />
                        </Stack>
                    
                </Stack>
  )
}

export default ActLeftDetail