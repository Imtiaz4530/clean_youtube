// import { useStoreActions, useStoreState } from 'easy-peasy'
// import { Box, Container, Typography } from '@mui/material'
// import Home from './Component/Home/Home'
// import Navbar from './Component/Navbar/Navbar'
// import CssBaseline from '@mui/material/CssBaseline';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Videos from './Component/Shared/Videos/Videos'
// import Player from './Component/Shared/Player/Player'

// const App = () => {
//   const {playlists, favorites, recents} = useStoreState((state) => state)
//   const {playlists: playlistsAction, favorites: favoriteAction, recents: recentAction} = useStoreActions((action) => action)

//     return (
//         <BrowserRouter>
//             <CssBaseline />
//             <Container maxWidth={false} style={{ padding: 0, minHeight: '100vh', }}>
//                 <Navbar playlistsAction={playlistsAction} />
//                 <Routes>
//                     <Route path='/' element={<Home playlistsAction={playlistsAction} playlists={playlists} favorites={favorites} recents={recents} favoriteAction={favoriteAction} recentAction={recentAction} />} />
//                     <Route path='/playlist/:id' element={<Videos playlists={playlists} />} />
//                     <Route path='/playlist/:id/watch/:v' element={<Player playlists={playlists} />} />
//                 </Routes>
//                 <Box display='flex' justifyContent='center' mb="35px">
//                     <Typography color="#666666">@copyright claim by SM Imtiaz 2024-2026</Typography>
//                 </Box>
//             </Container>
//         </BrowserRouter>
//     )
// }

// export default App

import { useStoreActions, useStoreState } from "easy-peasy";
import { Box, Container, Typography, CssBaseline } from "@mui/material";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Videos from "./Component/Shared/Videos/Videos";
import Player from "./Component/Shared/Player/Player";
import { useEffect } from "react";

const App = () => {
  const { playlists, favorites, recents } = useStoreState((state) => state);
  const {
    playlists: playlistsAction,
    favorites: favoriteAction,
    recents: recentAction,
  } = useStoreActions((action) => action);
  const { resetError } = useStoreActions((actions) => actions.playlists);
  const { error } = useStoreState((state) => state.playlists);

  useEffect(() => {
    if (error) {
      alert(error);
      resetError();
    }
  }, [error, resetError]);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          padding: 0,
          minHeight: "100vh",
          backgroundColor: "#121212",
          color: "#FFFFFF",
        }}
      >
        <Navbar playlistsAction={playlistsAction} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                playlistsAction={playlistsAction}
                playlists={playlists}
                favorites={favorites}
                recents={recents}
                favoriteAction={favoriteAction}
                recentAction={recentAction}
              />
            }
          />
          <Route
            path="/playlist/:id"
            element={<Videos playlists={playlists} />}
          />
          <Route
            path="/playlist/:id/watch/:v"
            element={<Player playlists={playlists} />}
          />
        </Routes>
        <Box display="flex" justifyContent="center" mb="35px">
          <Typography color="#888888">© 2024-2026 SM Imtiaz</Typography>
        </Box>
      </Container>
    </BrowserRouter>
  );
};

export default App;
