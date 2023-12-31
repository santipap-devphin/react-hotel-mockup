import  React , {useState}  from 'react';
import { Tabs , Tab, Box}  from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const MobileDashboard = () => {

  const [value, setValue] =  useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<Box sx={{ maxWidth: { xs: 360 , sm: "98%"  , md:"100%" } ,backgroundColor:"#ffffff" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d"}}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                >
                {/*<Tab label="แดชบอร์ด" icon={<DashboardIcon />} />*/}
                <Tab label="ห้องพัก" />
                <Tab label="ประสบการณ์" />
                <Tab label="แกลลอรี่" />
                <Tab label="กิจกรรม" />
                <Tab label="โปรโมชั่น" />
                <Tab label="ออกจากระบบ" />
            
            </Tabs>
        </Box>
  )
}

export default MobileDashboard