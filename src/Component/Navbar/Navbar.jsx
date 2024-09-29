// import {AppBar, Toolbar, Typography, Container, Box, Button, Link} from '@mui/material';
// import {Link as RouterLink, useLocation} from 'react-router-dom'
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import PlaylistForm from './PlaylistForm/playlistForn';
// import { useState } from 'react';

// const Navbar = ({playlistsAction}) => {
//     const [open, setOpen] = useState(false)
//     const {pathname} = useLocation()

//     const handleClickOpen = () => {
//       setOpen(true);
//     };

//     const handleClose = () => {
//       setOpen(false);
//     };

//     return (
//       <AppBar position="static" sx={{backgroundColor: "#E8C872"}}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <YouTubeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#FF0000' }} />
//             <Link component={RouterLink} to={'/'} sx={{textDecoration: 'none'}}>
//               <Typography variant="h6" sx={{mr: 2, display: { xs: 'none', md: 'flex' },fontFamily: 'monospace',fontWeight: 700,letterSpacing: '.3rem', color: '#FF0000' }}>CLEAN YOUTUBE</Typography>
//             </Link>

//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

//             <Box sx={{ flexGrow: 0 }}>
//                 <Button className='btnAddPl' disabled={pathname !== '/'} onClick={handleClickOpen} variant="contained" sx={{background: '#FF0000'}}>Playlist-ID</Button>
//                 <PlaylistForm open={open} handleClose={handleClose} playlistsAction={playlistsAction} />
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     );
// }
// export default Navbar;

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaylistForm from "./PlaylistForm/playlistForn";
import { useState } from "react";

const Navbar = ({ playlistsAction }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E1E1E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <YouTubeIcon
            sx={{
              display: "flex", //
              mr: 1,
              color: "#FF0000",
            }}
          />
          <Link component={RouterLink} to={"/"} sx={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#FF0000",
              }}
            >
              CLEAN YOUTUBE
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              className="btnAddPl"
              disabled={pathname !== "/"}
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                backgroundColor: "#FF0000",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#D32F2F",
                },
              }}
            >
              Playlist-ID
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              playlistsAction={playlistsAction}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
