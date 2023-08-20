import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "../TopBar/TopBar";
import SidBar from "./SidBar";
import { getDesignTokens } from "../../Theme";
import Footer from "../Footer/Footer";

//  const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  //edited
  padding: theme.spacing(5, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TopBar
            setMode={setMode}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />

          <SidBar
            open={open}
            handleDrawerClose={handleDrawerClose}
            sx={{ mr: 0 }}
          />
          <Box component="main" sx={{ p: 5 }}>
            <DrawerHeader />
            <toolbar />
            <Typography paragraph> المحتوى</Typography>
          </Box>
        </Box>
      </ThemeProvider>

      <Footer />
    </div>
  );
}
