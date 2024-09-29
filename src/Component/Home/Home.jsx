// import { Box, Container } from "@mui/material";
// import CardItem from "../Shared/CardItem/CardItem";
// import Typo1 from "../Shared/Typography/Typo1";
// import { useRecentAndFavorites, usePlaylist } from "../../hook/usePlaylist";
// import { ClockLoader } from "react-spinners";

// const Home = ({
//   playlists,
//   favorites,
//   recents,
//   favoriteAction,
//   recentAction,
//   playlistsAction,
// }) => {
//   const playlist = usePlaylist(playlists?.data);
//   const recentsList = useRecentAndFavorites(playlists?.data, recents?.items);
//   const favoriteList = useRecentAndFavorites(playlists?.data, favorites?.items);

//   return (
//     <Container maxWidth="xl">
//       <Box sx={{ mb: 12 }}>
//         <Typo1 type="Playlists" />
//         {playlists?.isLoading && (
//           <Box
//             sx={{ display: "flex", justifyContent: "center", margin: "0 15px" }}
//           >
//             <ClockLoader color="#36d7b7" />
//           </Box>
//         )}
//         {playlists?.error && alert("Wrong PlaylistID")}
//         {
//           <CardItem
//             typo={"No playlist added!"}
//             playlist={playlist}
//             favoriteAction={favoriteAction}
//             favorites={favorites}
//             playlistsAction={playlistsAction}
//             recents={recents}
//             recentAction={recentAction}
//           />
//         }
//       </Box>
//       <Box>
//         <Typo1 type="Favorites" />
//         <CardItem
//           typo={"No favorite added!"}
//           playlist={favoriteList}
//           favoriteAction={favoriteAction}
//           favorites={favorites}
//           playlistsAction={playlistsAction}
//           isDelete={false}
//           recents={recents}
//           recentAction={recentAction}
//         />
//       </Box>
//       <Box>
//         <Typo1 type="Recents" />
//         <CardItem
//           typo={"No recent playlist!"}
//           playlist={recentsList}
//           favoriteAction={favoriteAction}
//           favorites={favorites}
//           playlistsAction={playlistsAction}
//           isDelete={false}
//           recents={recents}
//           recentAction={recentAction}
//         />
//       </Box>
//     </Container>
//   );
// };

// export default Home;

import { Box, CircularProgress, Container, Typography } from "@mui/material";
import CardItem from "../Shared/CardItem/CardItem";
import Typo1 from "../Shared/Typography/Typo1";
import { useRecentAndFavorites, usePlaylist } from "../../hook/usePlaylist";

const Home = ({
  playlists,
  favorites,
  recents,
  favoriteAction,
  recentAction,
  playlistsAction,
}) => {
  const playlist = usePlaylist(playlists?.data);
  const recentsList = useRecentAndFavorites(playlists?.data, recents?.items);
  const favoriteList = useRecentAndFavorites(playlists?.data, favorites?.items);

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#121212",
        color: "#E0E0E0",
        minHeight: "100vh",
        paddingTop: 4,
      }}
    >
      <Box sx={{ mb: 12 }}>
        <Typo1 type="Playlists" />
        {playlists?.isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "10vh",
              gap: 2,
            }}
          >
            <CircularProgress
              size={50}
              thickness={5}
              sx={{ color: "#36d7b7" }}
            />
          </Box>
        )}
        {playlists?.error && alert("Wrong PlaylistID")}
        {
          <CardItem
            typo={"No playlist added!"}
            playlist={playlist}
            favoriteAction={favoriteAction}
            favorites={favorites}
            playlistsAction={playlistsAction}
            recents={recents}
            recentAction={recentAction}
          />
        }
      </Box>
      <Box>
        <Typo1 type="Favorites" />
        <CardItem
          typo={"No favorite added!"}
          playlist={favoriteList}
          favoriteAction={favoriteAction}
          favorites={favorites}
          playlistsAction={playlistsAction}
          isDelete={false}
          recents={recents}
          recentAction={recentAction}
        />
      </Box>
      <Box>
        <Typo1 type="Recents" />
        <CardItem
          typo={"No recent playlist!"}
          playlist={recentsList}
          favoriteAction={favoriteAction}
          favorites={favorites}
          playlistsAction={playlistsAction}
          isDelete={false}
          recents={recents}
          recentAction={recentAction}
        />
      </Box>
    </Container>
  );
};

export default Home;
