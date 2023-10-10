import React  , {useState , useEffect  , useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Grid , Button , TextField , Autocomplete , Chip , Typography ,Box,  Switch ,FormGroup , FormControlLabel, Stack} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DataContext from '../../context/DataContext';
import SweetAlert2 from 'react-sweetalert2';
import endpoint from '../../api/endpoint';


const GalAdd = () => {

    const {urlServer} = useContext(DataContext);

    let navicate = useNavigate();

    const [chipData, setChipData] = useState([]);
    const [checked, setChecked] = useState([0]);
    const [imageUrl , setImageUrl] = useState(null);
    const [chkSwitch , setchkSwitch] = useState(true); 
    const [nameImg , setNameImg] = useState('');
    const [detailImg , setDetailImg] = useState('');
    const [altImg , setAltImg] = useState('');
    const [wImg , setWimg] = useState('');
    const [hImg ,setHimg] = useState('');
    const [tagImg , setTagImg] = useState('');
    const [tagsAll , setTagAll] = useState([]);
    const [statusImg,setStatusImg] = useState(false);
    const [msgSystem , setMsgSystem] = useState('');
    const [fileTemp , setFileTemp] = useState({});
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

    useEffect(() => {

        let callSucess = true;

        const reqRequestTagAll = async () => {

            try {
                const response = await endpoint.get("/imgmedia/tagsall")
                if(response.data.code === 1){

                    setTagAll(response.data.list);

                }
           
            } catch (err) {
                console.error(err); 
            }
         }

         if(callSucess){

            reqRequestTagAll();

         }

         return () => {

            callSucess = false;

         }


    },[])


    const handleDelete = (id) => {
   
       console.log(id)
       //console.log(chipToDelete)
       const filterData = chipData.filter((list) => list.id !==  id );
   
        console.log(filterData);
        setChipData(filterData);
   
   }
   
    const submitGal = async (e) => {
   
       e.preventDefault();

       if(Object.keys(fileTemp).length > 0){

             if(chipData.length > 0 ){

                const frmData = new FormData();
                let sizeimg = {};
                let tagsname = [];
                sizeimg = {width:wImg , height:hImg}

                frmData.append("name", nameImg);
                frmData.append("des", detailImg);
                frmData.append("alt", altImg);
                frmData.append("size", JSON.stringify(sizeimg));
                frmData.append("file", fileTemp["fileimg"]);
                frmData.append("status", chkSwitch);

                if(chipData.length === 1){

                    frmData.append("tags", JSON.stringify(chipData[0].label));
                }else{

                    chipData.forEach((ele) => {

                        tagsname.push(ele.label)
    
                    })

                    frmData.append("tags", JSON.stringify(tagsname));

                }
               
                 try {

                    const response = await endpoint.post("/imgmedia/add"  , frmData , {delay: 500 , headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    }});

                    if(response.data.code === 1){

                        setSwalProps({...swalProps , show:true , icon:"success", title:"เพิ่มข้อมูลเรียบร้อยแล้ว" , showConfirmButton:false})

                        setTimeout(function() {setSwalProps({...swalProps , show:false , title:"" , showConfirmButton:false})}, 3000);

                        setTimeout(function() { navicate('/backend/gallery');}, 2000);

                    }
                    
                } catch (err) {
                    console.error(err)
                }

               


             }else{

             
                setSwalProps({...swalProps , show:true , title:"กรุณาเพิ่ม Tag รูปอย่างน้อง 1 แท๊ก"})
                setSwalProps({...swalProps , show:false , icon:"", title:"" , showConfirmButton:false})
             }


       }else{

            setSwalProps({...swalProps , show:true , title:"กรุณาอัพโหลดรูปภาพ" })

       }
   
    }
   
    const addAMENITIES = () => {

        console.log(chipData)

        var tagname = tagImg;
        let check = 0;

        console.log(check)

        if(chipData.length > 0 ){

            chipData.forEach((ele => {

                if(ele.label === tagImg){

                        alert("คุณได้เพิ่ม TAg ซ้ำกัน");
                        tagname = "";
                        check = 1;
                    
                        
                }
             }))
        }

       

        if(check === 0){
            setChipData([...chipData , {id:chipData.length > 0 ? chipData[chipData.length-1].id +1 : 1, label:tagname}])
        }

        setTagImg('')
    }
    const uploadImg = (e) => {

        setStatusImg(false)
        const file = e.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

        console.log(file)
    
        if (!allowedTypes.includes(file?.type)) {
           
            setStatusImg(true);
            setMsgSystem("Only JPEG, PNG, and GIF images are allowed.");
            return;
        }else{
    
            const reader = new FileReader();

            const img = document.createElement('img');

            const objectURL = URL.createObjectURL(file);

            setNameImg(file.name);
    
            reader.onloadend = () => { 

                img.onload = function handleLoad() {
                    

                     if (img.width < 149 && img.height < 99) {
                      console.log(
                        "upload SizeImg minimun 150 x 100",
                      );

                      return;

                    }else{

                        setWimg(img.width)
                        setHimg(img.height)
                        console.log(`Width: ${img.width}, Height: ${img.height}`);

                    }
              
                    URL.revokeObjectURL(objectURL);
                };

                img.src = objectURL;
    
                console.log(fileTemp)
                //console.log(reader.result)
                setFileTemp({...fileTemp , filebase64:reader.result , fileimg:file})
               
                //file["namefolder"]  = "cate";
                setStatusImg(true);
            }
    
             reader.readAsDataURL(file) 
    
        }
    
    
    }

  return (<>{console.log(chipData)}
            <Grid container sx={{m:1}}>
                <Grid item xs={4}>
                    <Link to={"/backend/gallery"} style={{textDecoration: "none"}}><Button variant="contained" color="primary"><ArrowBackIcon/> กลับ</Button></Link>
                </Grid>
            </Grid>
            <SweetAlert2 
                    {...swalProps}
                    didClose={() => {
                        // run when swal is closed...
                        setSwalProps({...swalProps , show:false })
                    }}
                    onConfirm={result =>  {
                        // run when clieked in confirm and promise is resolved...
                        if(result.isConfirmed){

                            navicate("/backend/gallery");
                        }
                    }}
             />
            <form onSubmit={submitGal} style={{width:"97%"}}>
            <Grid container sx={{background:"#ffffff" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , m:1.5}}>
            <Grid item xs={12} sx={{p:2}}>
                        <Button
                        variant="contained"
                        component="label"
                        size="small"
                        color="primary"
                        sx={{mt:1 , "&:hover": { backgroundColor:"#fff" , color:"#000"}}}
                    >
                                <ImageIcon/>
                                <input
                                name="uploadgallery"
                                type="file"
                                onChange={uploadImg}
                                hidden
                                />
                            อัพโหลดรูป Gallery
                    </Button>
                    <Grid item xs={12} sx={{pt:2}}>
                    {
                        statusImg && Object.keys(fileTemp).length > 0 ?
                        <img src={fileTemp.filebase64} alt="img-gallery" style={{width:"100%"}} /> 
                        : <img src={'../../image/noimg.jpg'} alt="img-blank" />
                    }
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <TextField 
                          id="nameimg" 
                          label="ชื่อรูป" 
                          variant="filled" 
                          value={nameImg} 
                          onChange={(e) => setNameImg(e.target.value)}
                          fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <TextField
                        id="detailimg"
                        label="รายละเอียดรูปภาพ"
                        variant='filled'
                        rows={2}
                        multiline
                        value={detailImg}
                        onChange={(e) => setDetailImg(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <TextField 
                          id="altimg" 
                          label="alt" 
                          variant="filled" 
                          value={altImg} 
                          onChange={(e) => setAltImg(e.target.value)}
                          fullWidth/>
                </Grid>
                <Grid item xs={6} sx={{p:2}}>
                        <TextField 
                          id="widthimg" 
                          label="ความกว้าง" 
                          variant="filled" 
                          value={wImg} 
                          onChange={(e) => setWimg(e.target.value)}
                          fullWidth/>
                </Grid>
                <Grid item xs={6} sx={{p:2}}>
                        <TextField 
                          id="heightimg" 
                          label="ความยาว" 
                          variant="filled" 
                          value={hImg} 
                          onChange={(e) => setHimg(e.target.value)}
                          fullWidth/>
                </Grid>
                <Grid item xs={11} sx={{p:2}}>
                <Autocomplete
                        freeSolo
                        id="tagimg"
                        options={tagsAll.length > 0 ? tagsAll.map((option) => option) : []}
                        variant="filled"
                        renderInput={(params) => <TextField {...params} variant="filled" label="แท็กรูปภาพ"/>}
                        onChange={(e , value) => {

                            if(value === null){
                                setTagImg('')
                            }else{
                                setTagImg(value)
                             }
                        }}
                        onInputChange={(event, newInputValue) => {
                            setTagImg(newInputValue);
                            
                         }}
                        value={tagImg}
                        inputValue={tagImg}
                        />
                        
                </Grid>
                <Grid item xs={1} sx={{p:2}}>
                    <Button variant='contained' size='large' onClick={addAMENITIES}>เพิ่ม</Button>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <Box 
                          sx={{ 
                            width: "89%",
                            p: 2, border: '1px dashed grey' 
                            }}>

                                {
                                chipData.length > 0 ?
                                chipData.map((data ,key) => {
                                    //console.log(data)
                                
                                    let vals = data.label;
                                /* if (data.label === 'React') {
                                        icon = <TagFacesIcon />;
                                    }*/
                                    
                                    return (<Chip
                                                sx={{m:2}}
                                                key={key}
                                                label={vals}
                                                color="info"
                                                onDelete={() => handleDelete(data.id)}
                                            />
                                            );
                                })
                                :<Typography variant='h6' sx={{p:2}}>ไม่มีข้อมูลที่เลือก</Typography>
                            }  
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <FormGroup>
                        <FormControlLabel control={<Switch  checked={chkSwitch}  onChange={() => setchkSwitch(!chkSwitch) }  />} label="สถานะเปิดใช้" />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <Button variant='contained' type="submit" sx={{m:1}}>ยืนยัน</Button>
                        <Button variant='contained' color="error" sx={{m:1}}>ยกเลิก</Button>
                </Grid>
            </Grid>
            </form>
        </>
    )
}

export default GalAdd