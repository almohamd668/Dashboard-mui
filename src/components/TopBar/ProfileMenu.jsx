import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { PersonOutlined } from '@mui/icons-material';



export default function ProfileMenu( ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
              
              sx={{ ml: 2,cursor:"pointer", color:"#fff" }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
           <PersonOutlined/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            background:"none",
             color:"#fff",
            overflow: 'visible',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 22,
              height: 22,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '" "',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >


       

  
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonOutlined/>
          </ListItemIcon> 
           الملف الشخصي 
          </MenuItem>
          
          

        <Divider />
                
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          الاعدادات
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout/>
          </ListItemIcon>
          تسجيل الخروج
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}