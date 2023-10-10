import React , {useState , useEffect} from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import endpoint from '../../api/endpoint';
import SweetAlert2 from 'react-sweetalert2';

const CategoryList = () => {


  const [listCateRoom , setListCateRoom] = useState([]);
  const [listCateExper , setListCateExper] = useState([]);
  const [listCateEvent , setListCateEvent] = useState([]);
  const [statusCall , setStatusCall] = useState(false);
  const [statusDel , setStatusDel] = useState(false);
  
  const [delID , setDelID] = useState({});
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
  
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    
    const handleDelete = (id , group) => {

        setDelID({id:id , group:group});
        setSwalProps({...swalProps , show:true , title:"ยืนยันการลบข้อมูล" , icon:"warning" , showConfirmButton:true})
        setTimeout(function(){ setSwalProps({...swalProps , show:false , title:"",text:"" , icon:"" , showConfirmButton:true}) }, 2000);

       
    };

    useEffect(() => {

      let callSuccess = true;

      const reqCate = async () => {

        setStatusCall(false);
        try {
          const response = await endpoint.get("/cate/alls");
          if(response.data.code === 1 ){

            console.log(response.data)

            setListCateRoom(response.data.room);
            setListCateExper(response.data.exper);
            setListCateEvent(response.data.event);
            setStatusCall(true)

          }
          
        } catch (err) {
            console.error(err)
        }
      }

      if(callSuccess){
        reqCate();
      }


      return () => {

        callSuccess = false;
        setStatusCall(false);
      }


    },[])

    useEffect(() => {
       const reqDel = async () => {

         setStatusCall(false)
          try {

          
          const response = await endpoint.post("/cate/del" , {id: delID["id"] , group:delID["group"]});
          if(response.data.code === 1){

            console.log(response.data);
            setListCateRoom(response.data.room);
            setListCateExper(response.data.exper);
            setListCateEvent(response.data.event);
            setStatusCall(true)


          }
          
        } catch (err) {
            console.error(err)
        }

      }

      if(statusDel){
        reqDel();
      }

      return () => {

        setStatusDel(false);
      
      }


    },[statusDel , delID])

    

  return (
    <Box
        sx={{
       
        mr:1.5,
        mt:1.5,
        p:2,
        boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
        transformStyle: "preserve-3d" 
       }}
      >
        <SweetAlert2 
                    {...swalProps}
                    didClose={() => {
                        // run when swal is closed...
                        setSwalProps({...swalProps , show:false })
                    }}
                    onConfirm={result =>  {
                        // run when clieked in confirm and promise is resolved...
                        if(result.isConfirmed){

                                setStatusDel(true);
                        }
                    }}
                />
      <Grid container sx={{m:1}} spacing={1}>
             <Grid item xs={12}>

              {
                statusCall && listCateRoom.length > 0 ? 

                listCateRoom.map((ele , keys) => {

                  return     <Chip
                                style={{marginTop:5 , marginRight:5}}
                                key={keys}
                                label={ele.rcatenameen}
                                onClick={handleClick}
                                onDelete={() => handleDelete(ele.rcateid , ele.group)}
                                deleteIcon={<DeleteIcon />}
                              />
                          

                })
                 :null
              }

              {
                statusCall && listCateExper.length > 0 ? 

                listCateExper.map((ele , keys) => {

                  return     <Chip
                              style={{marginTop:5 , marginRight:5}}
                              key={keys}
                              label={ele.expernameen}
                              onClick={handleClick}
                              onDelete={() => handleDelete(ele.experid , ele.group)}
                              deleteIcon={<DeleteIcon />}
                              />
                          

                })
                 :null
              }

              {
                statusCall && listCateEvent.length > 0 ? 

                listCateEvent.map((ele , keys) => {

                  return     <Chip
                                style={{marginTop:5 ,marginRight:5}}
                                key={keys}
                                label={ele.eventnameen}
                                onClick={handleClick}
                                onDelete={() => handleDelete(ele.eventid , ele.group)}
                                deleteIcon={<DeleteIcon />}
                            />
                          

                })
                 :null
              }
              
            </Grid>
            </Grid>
       </Box>
  )
}

export default CategoryList