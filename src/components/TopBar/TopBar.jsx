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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 150,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const serchInp = useRef();

  let search = localStorage.getItem("search");

  const getLocalStorage = () => {
    if (search) {
      return (search = JSON.parse(localStorage.getItem("search")));
    } else {
      return [];
    }
  };
  const theme = useTheme();
  const [serchHistory, setSerchHistory] = useState("");
  const [localSerchHistory, setLocalSerchHistory] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
{/*const [displaySearchInput, setDisplaySearchInput] = useState(false);*/}

  useEffect(() => {
    let seData = getLocalStorage();
    seData.push(serchHistory);
    setLocalSerchHistory(seData);
  }, [serchHistory]);

  const handleSerch = () => {
    serchHistory && localStorage.setItem("search", JSON.stringify(localSerchHistory));
    search && setDisplayResults(!displayResults);
    setSerchHistory("");
  };
  const desplayHandler = () => {
    search && setDisplayResults(!displayResults);
  };
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

        
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Search style={{
            transition: "2 s" ,
          
          }}>
            <StyledInputBase
              placeholder="بحث…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSerchHistory(() => e.target.value)}
              onClick={desplayHandler}
              ref={serchInp}
              value={serchHistory}
            />
            {displayResults && <SearchHistory SearchHistory={localSerchHistory} />}
          </Search>
        </Box>

        <IconButton color="inherit" onClick={handleSerch}>
        {" "}
        <SearchIcon />{" "}
      </IconButton>
    
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
