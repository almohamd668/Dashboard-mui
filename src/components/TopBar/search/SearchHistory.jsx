import "./searchHistory.css";
import IconButton from "@mui/material/IconButton";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

import { useEffect } from "react";
import  {Box}  from "@mui/material";



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






const SearchHistory = () => {
 







  let search = localStorage.getItem("search");





  const getLocalStorage = () => {
    if (search) {
      return (search = JSON.parse(localStorage.getItem("search")));
    } else {
      return [];
    }
  };



  const [serchHistory, setSerchHistory] = useState("");
  const [localSerchHistory, setLocalSerchHistory] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  {/*const [displaySearchInput, setDisplaySearchInput] = useState(false);*/}

  useEffect(() => {
    let seData = getLocalStorage();
    seData.includes(serchHistory) ? null : seData.push(serchHistory);
    setLocalSerchHistory(seData);
  }, [ serchHistory]);

  const addSearchItem = () => {
    serchHistory && localStorage.setItem("search", JSON.stringify(localSerchHistory));
    search && setDisplayResults(!displayResults);
    setSerchHistory("");
  };
  const desplayHandler = () => {
    search && setDisplayResults(!displayResults);
  };


  const onSearch = (item) => {
    // data from api 
    setSerchHistory(item);
   } 


  const handleDelete = (item) => {
const  local = getLocalStorage();
   
      const updateSearch = local.filter(value => value !== item) 
  localStorage.setItem("search", JSON.stringify(updateSearch));
  setLocalSerchHistory(updateSearch);
  }


  return (
<>
  
      <Box
      sx={{
        position: "relative",
      }}
      >
      <Search>
        <StyledInputBase
          placeholder="بحث…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSerchHistory(() => e.target.value)}
          onClick={desplayHandler}
          value={serchHistory}
          onKeyUp={(e) => e.key =="Enter" && addSearchItem() }
        />
        { displayResults &&   
           <div className="results-list">
        { 
          localSerchHistory.filter((item) => {
          const searchTerm = serchHistory.toLowerCase();
          const searchData = item.toLowerCase();
  
          return searchData.includes(searchTerm) && searchData !== searchTerm;
        }).slice(0,6).map(
          (item ,id) =>
          item !== "" && (
         <div key={id} className=" dropdown-row ">
               <div className="valu-item" onClick={() => onSearch(item)}>
                 {item}
               </div>
               <IconButton  onClick={() => handleDelete(item)}>
               
               <HighlightOffOutlinedIcon />
             </IconButton>
         </div>
            )
        )}
      </div> }

      </Search>
      </Box>
      
      <IconButton color="inherit" onClick={addSearchItem}>
      {" "}
      <SearchIcon />{" "}
      </IconButton>
    
</>
  );
};

export default SearchHistory;








