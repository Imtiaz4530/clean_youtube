// import Card1 from '../Card/Card'
// import { Container, Grid } from '@mui/material'
// import Typo2 from '../Typography/Type2'

// const CardItem = ({typo, playlist, favoriteAction, favorites, playlistsAction, isDelete, recents, recentAction}) => {
//     return (
//         <Container maxWidth={'xl'}>
//             {playlist.length === 0 ?
//             <Typo2 type={typo} />
//             :
//             (<Grid container alignItems='stretch'>
//                 {playlist.map((item) => (
//                     <Grid key={item?.playlistId}  item xs={12} md={6} lg={3} >
//                         <Card1 recents={recents} isDelete={isDelete} playlistsAction={playlistsAction} favoriteAction={favoriteAction} favorites={favorites} playlistId={item?.playlistId}  playlistThumbnile={item?.playlistThumbnail.url} playlistTitle={item?.playlistTitle} channelTitle={item?.channelTitle} recentAction={recentAction}/>
//                     </Grid>

//                 ))}
//             </Grid>
//             )}
//         </Container>
//     )
// }

// export default CardItem

import Card1 from "../Card/Card";
import { Container, Grid } from "@mui/material";
import Typo2 from "../Typography/Type2";

const CardItem = ({
  typo,
  playlist,
  favoriteAction,
  favorites,
  playlistsAction,
  isDelete,
  recents,
  recentAction,
}) => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ backgroundColor: "#1E1E1E", padding: 2, borderRadius: 2 }}
    >
      {playlist.length === 0 ? (
        <Typo2 type={typo} />
      ) : (
        <Grid container alignItems="stretch" spacing={2}>
          {playlist.map((item) => (
            <Grid key={item?.playlistId} item xs={12} md={6} lg={3}>
              <Card1
                recents={recents}
                isDelete={isDelete}
                playlistsAction={playlistsAction}
                favoriteAction={favoriteAction}
                favorites={favorites}
                playlistId={item?.playlistId}
                playlistThumbnile={item?.playlistThumbnail.url}
                playlistTitle={item?.playlistTitle}
                channelTitle={item?.channelTitle}
                recentAction={recentAction}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CardItem;
