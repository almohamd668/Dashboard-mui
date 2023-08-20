import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { HomeOutlined } from '@mui/icons-material';
import { PeopleAltOutlined } from '@mui/icons-material';
import { ContactsOutlined } from '@mui/icons-material';
import { ReceiptOutlined } from '@mui/icons-material';
import { MapOutlined } from '@mui/icons-material';
import { CalendarTodayOutlined } from '@mui/icons-material';
import logo from "../../assets/assest-logo.png";
import SidBarList from './SidBarList';


const drawerWidth = 240;




const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  
  
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

  const listArr = [
    {text : " المواعيد" , icon: <CalendarTodayOutlined/>, path: "/records"},
    {text: "المستخدمون ", icon: <PeopleAltOutlined/>, path: "/team"},
    {text: " معلومات الاتصال", icon: <ContactsOutlined/>,path: "/contacts"},  
    {text: "الفواتير", icon: <ReceiptOutlined/>,path: "/invoices"},  
  ];
  
  const mainArr = [
    {text : " الرىيسية" , icon: <HomeOutlined/>, path: "/"},
];
const labelArr = [
  {text : "عامة" , icon: <MapOutlined/>, path: "/"},
];


const SidBar = ({open, handleDrawerClose}) => {
    const theme = useTheme();

  return (
    
    <Drawer variant="permanent" anchor="right" open={open}>
    
    <DrawerHeader>
    <img  src={logo} width="45px"  alt="" />  <span style={{ marginRight: "30px"}}>Assest</span>
    <IconButton onClick={handleDrawerClose}>
    {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon/>}
    
      </IconButton> 

    </DrawerHeader>

    <Divider />
  <SidBarList arr={mainArr}/>   
  <SidBarList arr={labelArr}/>   
  <SidBarList arr={listArr}/>
 
  </Drawer>

    )
}

export default SidBar