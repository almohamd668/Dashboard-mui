import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

const SidBarList = ({arr}) => {
  const navigate = useNavigate();

  return (
    <>
    
    <List sx={{
      padding: 0,
    }}>
      {arr.map((item) => (

        <ListItem
          key={item.path}
          disablePadding
           sx={{ display: "block", marginTop: "12px" }}
        >
          <ListItemButton
            sx={{
              minHeight: 0,
              minWidth: 0,
              justifyContent: open ? "between" : "center",
              pr: 0,
            }}
            onClick={() => navigate(`${item.path}`)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2.3 : "0",
                justifyContent: "center",
                pl: 0,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ opacity: open ? 1 : 0, paddingInlineStart: "25px" }}
            />
          </ListItemButton>
        </ListItem>
        
      ))}

      
      </List>

      <Divider />
    </>
  );
};

export default SidBarList;
