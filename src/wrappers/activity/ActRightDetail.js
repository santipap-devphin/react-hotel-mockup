import React , { useState , useEffect} from 'react';
import { Stack, Typography , Chip , Grid , Divider , IconButton , Button} from '@mui/material';
import {Link ,useNavigate} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function ActRightDetail() {

  let navigate = useNavigate();
  const [disBtn , setDisBtn] = useState(true);
  const [disBtnNext , setDisBtnNext] = useState(true);
  const [NextData, setNextData] = useState('');
  const [PrvData, setPrvData] = useState('');

  const nextPost = () => {

    //setLoadSuccess(false);
    //navigate(`/blog-content/${NextData}`)
 }

  return (<Stack spacing={1} sx={{boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d" , p:2.5 , color:"#000"}}>
                {/*<img src={data.blogImg} alt='blog-content-detail' />*/}
                
                <Typography variant='h5'>Title</Typography>
                <Grid container>
                    <Grid item xs={12}>
                        
                        <div id="editorblog" dangerouslySetInnerHTML={{__html:"Content"}}></div>
                    </Grid>
                </Grid>
                <Stack direction="row">
                    <Typography sx={{fontSize:18 ,pr:1}}>หมวดหมู่</Typography>
                    <Chip label={"CateName"} color="default" />
                </Stack>
              
                <Grid container sx={{pt:1,pb:1}}>
                    <Grid item xs={6}>

                        <Stack direction="row">
                            <Typography sx={{fontSize:18 ,pr:1}}>แท๊ก </Typography>
                            <Link to={"/Events"} style={{ textDecoration: 'none' , color:"#000" , fontSize:18 , margin:2}}><Chip label={"Cate"} color="info" /></Link> 
                        </Stack>
                        
                   </Grid>
                    <Grid item xs={6} textAlign="right">
                    <Typography variant='p' sx={{fontSize:18}}> <span style={{paddingTop:"10px"}}>Share</span> : </Typography>
                    <IconButton aria-label="facebook">
                        <FacebookIcon sx={{color:"#3b5998"}} />
                    </IconButton>
                    <IconButton aria-label="twiter">
                        <TwitterIcon sx={{color:"#55acee"}} />
                    </IconButton>
                    <IconButton aria-label="twiter">
                        <InstagramIcon sx={{color:"#c32aa3"}} />
                    </IconButton>
                    </Grid>
                </Grid>
                <Stack>
                    <Typography variant='p'>วันที่ โพสต์ {"27/01/66"}</Typography>
                </Stack>
                <Divider  />
                
                
                <Grid container sx={{pt:1 , pb:1}}>
                    <Grid item xs={6}>
                        <Button onClick={""} style={ disBtn ? {display:"flex"} : {display:"none"}}>Prev Post </Button>
                     </Grid>
                    <Grid item xs={6} textAlign="right">

                        {
                            disBtnNext ? <Button onClick={nextPost}>Next Post</Button> : null
                        }
                    </Grid>
                </Grid>
                <Divider  />
            </Stack>
  )
}

export default ActRightDetail