import React  , {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; 
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginMain  = () => {
    
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (e) => {
      e.preventDefault();
    };

  return (
    <Box
        sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)'}}
    >
        <Container>
            <Grid container spacing={2} sx={{boxShadow: "0 0px 10px 0px rgb(0 0 0 / 10%)" , transformStyle: "preserve-3d"}}>
                <Grid item="true" md={4}>
                  <img src="../../image/imglogin2.jpg" style={{width:"100%"}} />
                 </Grid>
                 <Grid item="true" md={8}>
                    <Stack spacing={2} sx={{ p:2}}>
                       
                        <Typography variant='h3'>ยินดีต้อนรับเข้าสู่ระบบ</Typography>
                        <Typography variant='p'>Lorem ipsum is placeholder text commonly used in the graphic</Typography>
                      
                        <FormControl sx={{ m: 1}} variant="filled" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type="text"
                                color="secondary"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                     <AccountCircle />
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1}} variant="filled" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                color="secondary"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button color="primary" variant="contained" style={{color:"#fff" , fontSize:20 , maxWidth:300 , marginTop:"30px"}} endIcon={<AdsClickIcon />}>ยืนยัน</Button>
                        <Typography variant='p'>ลืมรหัสผ่าน</Typography>
                    </Stack>
                 </Grid>
                              
            </Grid>
         </Container>
        
    </Box>
  )
}

export default LoginMain