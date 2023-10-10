import React  , {useState , useEffect} from 'react';
import { Link , useNavigate, useParams} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Grid , Button , TextField , Typography , Stack} from '@mui/material';
import Editor from '../../component/Editor';
import endpoint from '../../api/endpoint';
import SweetAlert2 from 'react-sweetalert2';
import CloseIcon from '@mui/icons-material/Close';

const WebEdit = () => {

    
    //const CATETH_REGEX = /^[ก-๏\s]+$/;
    //const CATETH_LENGTH = desWebTh.length > 100 ? setValidDesTh(true) : setValidDesTh(false);
     const [titleWeb , setTitleWeb] = useState('');
     const [desWebTh , setDesWebTh] = useState('');
     const [desWebEn ,setDesWebEn] = useState('');
     const [statusSuccess , setStatusSuccess] = useState(false);
     const [validDesTh , setValidDesTh] = useState(false);
     const [validDesEn , setValidDesEn] = useState(false);
    
     const [swalProps, setSwalProps] = useState({
        show: false,
        title: '',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: false,
        confirmButtonText:"OK",
        cancelButtonText:"Cancel"
    });

     let navicate = useNavigate();
     const {id} = useParams();
     let paramsID = id;

     const submitWeb = async (e) => {
   
       e.preventDefault();

        if(titleWeb && desWebTh && desWebEn && validDesTh && validDesEn){

            try {

                const response = await endpoint.post("/webs/update", {id:paramsID , title:titleWeb , desth:JSON.stringify(desWebTh) , desen:JSON.stringify(desWebEn) } , {delay: 500 , headers: {
                    'Accept': 'application/json',
                }})

                if(response.data.code === 1){
                    msgAlert("แก้ไขข้อมูลเรียบร้อยแล้ว" , "success" , "success");

                }
                
            } catch (err) {
                
            }


        }else{

            if(titleWeb === ""){

                msgAlert("กรุณากรอกหัวข้อเว็บ" , "error" , "error")

            }else if(desWebTh === ""){

                msgAlert("กรุณาเลือกข้อมูลเว็บเป็นภาษาไทย" , "error" , "error")

            }else if(desWebEn === ""){

                msgAlert("กรุณาเลือกข้อมูลเว็บเป็นภาษาอังกฤษ" , "error" , "error")

            }
            else if(validDesTh === false){

                msgAlert("กรุณากรอกข้อมูลเว็บเป็นภาษาไทยอย่างน้อย 100 ตัวอักษร" , "error" , "error")

            }
            else if(validDesEn === false){

                msgAlert("กรุณากรอกข้อมูลเว็บเป็นภาษาอังกฤษ" , "error" , "error")

            }

        }
   
    }

    const msgAlert = (mes , icons , types) => {

        if(types === "error"){

            setSwalProps({...swalProps , show:true , icon:icons , title:"ข้อความจากระบบ" , text:mes})
            setTimeout(function(){setSwalProps({...swalProps , show:false , icon:"", title:"" , showConfirmButton:false}) }, 2000);
        }
        else if(types === "success"){

            setSwalProps({...swalProps , show:true , icon:icons , title:"ข้อความจากระบบ" , text:mes})
            setTimeout(function(){setSwalProps({...swalProps , show:false , icon:"", title:"" , showConfirmButton:false}) }, 2000);
            setTimeout(function() { navicate('/backend/web');}, 3000);

        }else{

            setTimeout(function(){setSwalProps({...swalProps , show:false , icon:"", title:"", cancelButtonText:"ปิด" , showConfirmButton:false}) }, 500);

        }
    }

    useEffect(() => {

     let callSuccess =  true;

     const reqWebsEdit = async () => {

        try {
            const response  = await endpoint.get("/webs/once/"+paramsID ,  {delay: 500 , headers: {
                'Accept': 'application/json',
            }});
            if(response.data.code === 1){

                setTitleWeb(response.data.list.WebTitle);
                setDesWebTh(JSON.parse(response.data.list.webDesTh));
                setDesWebEn(JSON.parse(response.data.list.webDesEn));
                setStatusSuccess(true);
            }

            
        } catch (err) {
            console.error(err)
        }


     }
     if(callSuccess){

        reqWebsEdit();

     }
     return () => {

        callSuccess = false;
    }
    },[paramsID])

   
    useEffect(() =>{

        const parser = new DOMParser();
        const doc3 = parser.parseFromString(desWebTh, "text/html");

        console.log(doc3.documentElement.textContent.length)
        if(doc3.documentElement.textContent !== ""){

            if(doc3.documentElement.textContent.length > 100){
                setValidDesTh(true);
            }else{
                setValidDesTh(false);
            }
        
        }
        
     },[desWebTh])

     useEffect(() => {

        const CATEEN_REGEX = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/;
        const parserEn = new DOMParser();
        const docEn = parserEn.parseFromString(desWebEn, "text/html");
        if(docEn.documentElement.textContent !== ""){
            setValidDesEn(CATEEN_REGEX.test(docEn.documentElement.textContent));
        }

     },[desWebEn])

    const handleDesTH = (value) => {

        setDesWebTh(value);
        
    }

    const handleDesEn = (value) => {

        setDesWebEn(value);
        
     }
 return (<>
                <SweetAlert2 
                    {...swalProps}
                    didClose={() => {
                        // run when swal is closed...
                        setSwalProps({...swalProps , show:false })
                    }}
                    onConfirm={result =>  {
                        // run when clieked in confirm and promise is resolved...
                        if(result.isConfirmed){

                            navicate("/backend/web");
                        }
                    }}
                />
                <Grid container sx={{m:1}}>
                    <Grid item xs={4}>
                        <Link to={"/backend/web"} style={{textDecoration: "none"}}><Button variant="contained" color="primary"><ArrowBackIcon/> กลับ</Button></Link>
                    </Grid>
                </Grid>
                {
                    statusSuccess ? 
                    <form onSubmit={submitWeb} style={{width:"97%"}}>
                            <Grid container sx={{background:"#ffffff" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , m:1.5}}>
                        
                                <Grid item xs={12} sx={{p:2}}>
                                            <TextField 
                                            id="titleweb" 
                                            label="หัวข้อ Web" 
                                            variant="filled" 
                                            value={titleWeb} 
                                            onChange={(e) => setTitleWeb(e.target.value)}
                                            fullWidth/>
                                            
                                </Grid>
                                
                                <Grid item xs={12} sx={{p:2}}>
                                    <Typography variant='h6'>รายละเอียดเว็บ (ภาษาไทย)</Typography>
                                    <Editor
                                    key={0}
                                    initialContent={desWebTh}
                                    onChange={handleDesTH}
                                    />
                                    {
                                                !validDesTh && desWebTh !== "" ? 
                                                <Stack sx={{mt:1}} direction="row">
                                                        <CloseIcon fontSize='small' style={{paddingTop:"0px" , color:"red"}}/>
                                                        <Typography variant='p' sx={{color:"red"}}>   กรุณากรอกข้อมูลเกิน 100 ตัวอักษร</Typography>
                                                </Stack>
                                                :null
                                    }
                                </Grid>
                                <Grid item xs={12} sx={{p:2}}>
                                    <Typography variant='h6'>รายละเอียดเว็บ (ภาษาอังกฤษ)</Typography>
                                    <Editor
                                    key={1}
                                    initialContent={desWebEn}
                                    onChange={handleDesEn}
                                    />
                                    {
                                            !validDesEn && desWebEn !== "" ? 
                                            <Stack sx={{mt:1}} direction="row">
                                                    <CloseIcon fontSize='small' style={{paddingTop:"0px" , color:"red"}}/>
                                                    <Typography variant='p' sx={{color:"red"}}>   กรุณากรอกข้อมูลเป็นภาษาอังกฤษเท่านั้น</Typography>
                                            </Stack>
                                            :null
                                        }
                                </Grid>

                            
                                <Grid item xs={12} sx={{p:2}}>
                                        <Button variant='contained' type="submit" sx={{m:1}}>ยืนยัน</Button>
                                        <Button variant='contained' color="error" sx={{m:1}}>ยกเลิก</Button>
                                </Grid>
                            </Grid>
                        </form>
                    :
                    null
                }
                
            </>
    )
}

export default WebEdit