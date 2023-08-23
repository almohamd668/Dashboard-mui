import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import AppBarBox from "./TopBarBox";
import { useState } from "react";
import SearchHistory from "./search/SearchHistory";
import { useRef } from "react";
import { useEffect } from "react";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // edited

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));


const TopBar = ({ open, handleDrawerOpen, setMode }) => {
 

  const theme = useTheme();





  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          // edited
          edge="start"
          sx={{
            marginLeft: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>    
        
        

    <SearchHistory/>

        <Box flexGrow={1} />
     

        {theme.palette.mode === "light" ? (
          <IconButton
            style={{ marginInline: "20px" }}
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
            color="inherit"
          >
            <DarkModeOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton
            style={{ marginInline: "20px" }}
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
            color="inherit"
          >
            <LightModeTwoToneIcon />
          </IconButton>
        )}
        <AppBarBox />
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
