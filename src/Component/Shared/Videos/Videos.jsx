// import { Box, CardMedia, Container, Grid, Typography } from '@mui/material'
// import { useParams } from 'react-router-dom'

// import Typo2 from '../Typography/Type2'
// import VideoCard from './Video/VideoCard'
// import { useEffect } from 'react'

// const Videos = ({playlists}) => {
//     const {id} = useParams()
//     const videos = playlists?.data[id]

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <Container sx={{mt: "15px"}} maxWidth={'xl'}>
//             <Box sx={{height: '250px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '80px', mb: 3}}>
//                 <Box sx={{width: "250px", border: '1px solid black', borderRadius: '50%', height: '250px' }}>
//                     <CardMedia component="img" height="100%" sx={{border: '1px solid black', borderRadius: '50%'}} image={playlists?.data[id]?.channelThumbnails?.url} alt={playlists?.data[id]?.channelTitle} loading='lazy' />
//                 </Box>
//                 <Box sx={{}}>
//                     <Typography variant='h4'>{videos?.channelTitle}</Typography>
//                 </Box>
//             </Box>
//             {videos?.playlistItems.length === 0 ?
//                 <Typo2 type={"No videos in this playlist!!!"} />
//                 :
//                 (<Grid container alignItems='stretch'>
//                     {videos?.playlistItems.map((item) => (
//                         <Grid key={item?.contentDetails?.videoId} item xs={12} md={4} lg={3} >
//                             <VideoCard playlistId={id} videoId={item?.contentDetails?.videoId} thumbnail={item?.thumbnails?.url} videoTitle={item?.title} videoDescription={item?.description} />
//                         </Grid>

//                     ))}
//                 </Grid>
//             )}
//         </Container>
//     )
// }

// export default Videos

import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Typo2 from "../Typography/Type2";
import VideoCard from "./Video/VideoCard";
import { useEffect } from "react";

const Videos = ({ playlists }) => {
  const { id } = useParams();
  const videos = playlists?.data[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      sx={{
        mt: "15px",
        backgroundColor: "#1E1E1E",
        borderRadius: "10px",
        padding: "20px",
      }}
      maxWidth={"xl"}
    >
      <Box
        sx={{
          height: "250px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          mb: 3,
          color: "#fff",
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #444",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            sx={{ borderRadius: "50%" }}
            image={playlists?.data[id]?.channelThumbnails?.url}
            alt={playlists?.data[id]?.channelTitle}
            loading="lazy"
          />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ color: "#FF0000", fontWeight: 700 }}>
            {videos?.channelTitle}
          </Typography>
        </Box>
      </Box>
      {videos?.playlistItems.length === 0 ? (
        <Typo2 type={"No videos in this playlist!!!"} />
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {videos?.playlistItems.map((item) => (
            <Grid
              key={item?.contentDetails?.videoId}
              item
              xs={12}
              md={4}
              lg={3}
            >
              <VideoCard
                playlistId={id}
                videoId={item?.contentDetails?.videoId}
                thumbnail={item?.thumbnails?.url}
                videoTitle={item?.title}
                videoDescription={item?.description}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Videos;
