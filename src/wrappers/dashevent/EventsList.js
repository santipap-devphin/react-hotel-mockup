import React , {useState , useEffect , useContext} from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import endpoint from '../../api/endpoint';
import DataContext from '../../context/DataContext';
import SweetAlert2 from 'react-sweetalert2';


const EventsList = () => {

    let navicate = useNavigate();

    const {convertDate , urlServer} = useContext(DataContext);

    const [delID, setDelID] = useState('');
    const [chkSwitch , setchkSwitch] = useState(true);
    const [statusEvents , setStatusEvents] = useState(false);
    const [listEvents , setListEvents] = useState([]);
    const [statusDel , setStatusDel] = useState(false);
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

        let callSucces = true;

        const reqEvents = async () => {

            try {

                const response = await endpoint.get("eventsact/all");
                if(response.data.code === 1){

                    setListEvents(response.data.list);
                    setStatusEvents(true);

                }
                console.log(response)
                
            } catch (err) {
                console.error(err);
            }

        }

        if(callSucces){

            reqEvents();

        }

        return () => {

            callSucces = false;
        }


    },[])


    useEffect(() => {

        const confirmDelte = async () => {

                    try {

                        const response = await endpoint.delete("/eventsact/del"  , {data:{id:delID}});
                        if(response.data.code === 1){
                             setListEvents(response.data.list);
                        }   
                        
                    } catch (err) {
                        console.error(err)
                    }


     }

     if(statusDel){

        confirmDelte();
     }
    },[statusDel , delID])
 
  
  
   const clkOpenModal = (id) => {

        setDelID(id);
        setSwalProps({...swalProps , show:true , title:"ยืนยันการลบข้อมูล" , showConfirmButton:true})

   }
 
   const label = { inputProps: { 'aria-label': 'Switch active' } };

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

                                setStatusDel(true);
                        }
                    }}
                />
                {
                    statusEvents && listEvents.length > 0 ?

                    listEvents.map((ite , keys) => {

                        return   <Grid key={keys} item xs={12} sm={4}>
                                        <Card sx={{boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" }}>
                                        <CardHeader
                                            title={ite.eventsTitle}
                                            subheader={convertDate(ite.eventsLog)}
                                        />
                                        {console.log(urlServer + ite.eventsImglist[0])}
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={urlServer + ite.eventsImglist[0]}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                      
                                         {
                                            <div dangerouslySetInnerHTML={{ __html:JSON.parse(ite.eventsDes).substring(0,300) + "....." }} />
                                         }
                                       
                                            
                                            <Typography variant="body2" color="text.secondary">
                                                หมวดหมู่ 
                                            </Typography>
                                            <Typography variant="p" color="text.secondary">
                                                
                                            <Chip label={ite.eventsCate} sx={{mt:1,mr:1}} />
                    
                                            </Typography>
                                        </CardContent>
                    
                                        <CardActions disableSpacing>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Switch {...label} checked={chkSwitch} onChange={() => setchkSwitch(!chkSwitch)} />  
                                                </Grid>
                                                <Grid item xs={6} textAlign="right">
                                                    <Link to={`/backend/events/edit/${ite.eventsID}`} style={{textDecoration: "none"}}>
                                                        <IconButton aria-label="edit" >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Link>
                                                <IconButton aria-label="del" onClick={() => clkOpenModal(ite.eventsID)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                        </Card>
                                    </Grid>
                        })

                    : <Grid item xs={12}>
                        <Box sx={{ p: 2, mr:2, border: '1px dashed grey' }}>
                            <Typography variant='h6'>ไม่มีข้อมูล</Typography>
                        </Box>
                    </Grid>
                }
          </>
    )
}

export default EventsList