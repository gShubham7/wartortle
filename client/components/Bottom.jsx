import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import style from "./Navbar.module.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -15,
  left: 0,
  right: 0,
  margin: "0 auto",
});

 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(200,200,200,.5)',
    },
  },
});

export default function Bottom() {

 
  return (
    <div className={style.bottom}>
      <React.Fragment  >
 
      <AppBar position="relative" color="primary" enableColorOnDark sx={{  width:"60%",margin:"auto",borderRadius:"50px"}}>
         <Toolbar>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
         </Toolbar>    
      </AppBar>
     
    </React.Fragment>
        </div>
  );
}