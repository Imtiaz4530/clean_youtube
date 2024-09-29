// import {Card, CardMedia, CardContent, CardActions, Typography, Box, Button, Container, Link, Stack  } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import {Link as LinkRouter} from 'react-router-dom'
// import DeleteConfirmation from './DeleteDialog';
// import { useEffect, useState } from 'react';

// const iconStyles = { color: "red", fontSize: "27px", cursor: 'pointer' };

// const Card1 = ({playlistId, playlistThumbnile, playlistTitle, channelTitle, favoriteAction, favorites, playlistsAction, isDelete = true, recents, recentAction}) => {
//     const [open, setOpen] = useState(false);

//     const setRecentId = () => {
//         if (!recents.items.includes(playlistId)) {
//             recentAction.setRecent(playlistId)
//         }
//     }

//     const handleClose = () => {
//       setOpen(false);
//     };
//     const handleOpen = () => {
//         setOpen(true);
//     }
//     const handleFav = () => {
//         if (!favorites.items.includes(playlistId)) {
//             favoriteAction.setFavList(playlistId)
//         }
//     }
//     const handleUnFav = () => {
//         if (favorites.items.includes(playlistId)) {
//             favoriteAction.removeFav(playlistId)
//         }
//     }

//     return (
//         <Box component="div" >
//             <Container maxWidth='lg' sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 3, flexGrow: 1 }} >
//                 <Card component="div" sx={{ display: 'flex', flexDirection: 'column', minHeight: 386, width: 300,maxWidth:300, flexGrow: 1, borderRadius: '10px', padding: "12px", border: '1px solid #ddd' }}>
//                     <CardMedia component="img" height="194" image={playlistThumbnile} alt={playlistTitle} loading='lazy' />
//                     <CardContent sx={{p: "10px"}}>
//                         <Typography fontSize="lg" color="#000000" sx={{ mt: 2 }}>{playlistTitle.length > 45 ? playlistTitle.substr(0, 45) + '...' : playlistTitle }</Typography>
//                         <Typography fontSize="sm" color="#777575" sx={{ mt: 1 }}> {channelTitle} </Typography>
//                     </CardContent>
//                     <Box sx={{flexGrow: 1}}></Box>
//                     <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
//                         <Box>
//                             <CardActions disableSpacing>
//                                 <Link sx={{ textDecoration: 'none' }} to={`/playlist/${playlistId}`} onClick={setRecentId} component={LinkRouter}>
//                                     <Button>
//                                         <Stack direction={'row'} spacing={1} alignItems='center' sx={{ ml: -2 }} >
//                                             <PlayCircleOutlineIcon />
//                                             <Typography level="body2" fontWeight={600} color='primary'>Start Tutorial</Typography>
//                                         </Stack>
//                                     </Button>
//                                 </Link>
//                             </CardActions>
//                         </Box>
//                         <Box sx={{width: '70px', display: 'flex', justifyContent: 'space-evenly'}}>
//                             {favorites.items.includes(playlistId) ? <FavoriteIcon onClick={handleUnFav} style={iconStyles} /> :
//                             <FavoriteBorderIcon onClick={handleFav} style={iconStyles} />}
//                             {isDelete && <DeleteIcon onClick={handleOpen} sx={{fontSize: '27px', cursor: 'pointer'}} />}
//                             <DeleteConfirmation open={open} handleClose={handleClose} playlistsAction={playlistsAction} id={playlistId} />
//                         </Box>
//                     </Box>
//                 </Card>
//             </ Container>
//         </Box>
//     );
// }

// export default Card1

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Container,
  Link,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link as LinkRouter } from "react-router-dom";
import DeleteConfirmation from "./DeleteDialog";
import { useState } from "react";

const iconStyles = { color: "red", fontSize: "27px", cursor: "pointer" };

const Card1 = ({
  playlistId,
  playlistThumbnile,
  playlistTitle,
  channelTitle,
  favoriteAction,
  favorites,
  playlistsAction,
  isDelete = true,
  recents,
  recentAction,
}) => {
  const [open, setOpen] = useState(false);

  const setRecentId = () => {
    if (!recents.items.includes(playlistId)) {
      recentAction.setRecent(playlistId);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleFav = () => {
    if (!favorites.items.includes(playlistId)) {
      favoriteAction.setFavList(playlistId);
    }
  };
  const handleUnFav = () => {
    if (favorites.items.includes(playlistId)) {
      favoriteAction.removeFav(playlistId);
    }
  };

  return (
    <Box component="div">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          mt: 3,
          flexGrow: 1,
        }}
      >
        <Card
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: 386,
            width: 300,
            maxWidth: 300,
            flexGrow: 1,
            borderRadius: "10px",
            padding: "12px",
            backgroundColor: "#2C2C2C",
            border: "1px solid #444",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={playlistThumbnile}
            alt={playlistTitle}
            loading="lazy"
          />
          <CardContent sx={{ p: "10px" }}>
            <Typography fontSize="lg" color="#FFFFFF" sx={{ mt: 2 }}>
              {playlistTitle.length > 45
                ? playlistTitle.substr(0, 45) + "..."
                : playlistTitle}
            </Typography>
            <Typography fontSize="sm" color="#AAAAAA" sx={{ mt: 1 }}>
              {channelTitle}
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <CardActions disableSpacing>
                <Link
                  sx={{ textDecoration: "none" }}
                  to={`/playlist/${playlistId}`}
                  onClick={setRecentId}
                  component={LinkRouter}
                >
                  <Button>
                    <Stack
                      direction={"row"}
                      spacing={1}
                      alignItems="center"
                      sx={{ ml: -2 }}
                    >
                      <PlayCircleOutlineIcon sx={{ color: "#FF0000" }} />
                      <Typography
                        level="body2"
                        fontWeight={600}
                        color="primary"
                      >
                        Start Tutorial
                      </Typography>
                    </Stack>
                  </Button>
                </Link>
              </CardActions>
            </Box>
            <Box
              sx={{
                width: "70px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {favorites.items.includes(playlistId) ? (
                <FavoriteIcon onClick={handleUnFav} style={iconStyles} />
              ) : (
                <FavoriteBorderIcon onClick={handleFav} style={iconStyles} />
              )}
              {isDelete && (
                <DeleteIcon
                  onClick={handleOpen}
                  sx={{ fontSize: "27px", cursor: "pointer", color: "#FF0000" }}
                />
              )}
              <DeleteConfirmation
                open={open}
                handleClose={handleClose}
                playlistsAction={playlistsAction}
                id={playlistId}
              />
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Card1;
