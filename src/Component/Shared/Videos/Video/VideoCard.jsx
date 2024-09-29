// import {Card, CardMedia, CardContent, CardActions, Typography, Box, Button, Container, Link, Stack  } from '@mui/material';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import {Link as LinkRouter} from 'react-router-dom'

// const VideoCard = ({videoId, thumbnail, videoTitle, playlistId}) => {
//     return (
//         <Box component="div" >
//             <Container maxWidth='lg' sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 3, flexGrow: 1 }} >
//                 <Card component="div" sx={{ display: 'flex', flexDirection: 'column', minHeight: 350, width: 275,maxWidth:275, flexGrow: 1, borderRadius: '10px', padding: "12px", border: '1px solid #ddd' }}>
//                     <CardMedia component="img" height="175" image={thumbnail} alt={videoTitle} loading='lazy' />
//                     <CardContent  sx={{p: "10px"}}>
//                         <Typography fontSize="lg" color="#000000" sx={{ mt: 2 }}>{videoTitle.length > 45 ? videoTitle.substr(0, 45) + '...' : videoTitle }</Typography>
//                     </CardContent>
//                     <Box sx={{flexGrow: 1}}></Box>
//                     <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
//                         <Box>
//                             <CardActions disableSpacing>
//                                 <Link sx={{ textDecoration: 'none' }} component={LinkRouter} to={`/playlist/${playlistId}/watch/${videoId}`}>
//                                     <Button>
//                                         <Stack direction={'row'} spacing={1} alignItems='center' sx={{ ml: -2 }} >
//                                             <PlayCircleOutlineIcon sx={{fontSize: 40}} />
//                                             <Typography level="body2" fontWeight={600} color='primary'>Play</Typography>
//                                         </Stack>
//                                     </Button>
//                                 </Link>
//                             </CardActions>
//                         </Box>
//                     </Box>
//                 </Card>
//             </ Container>
//         </Box>
//     );
// }

// export default VideoCard

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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link as LinkRouter } from "react-router-dom";

const VideoCard = ({ videoId, thumbnail, videoTitle, playlistId }) => {
  return (
    <Box component="div">
      <Container
        maxWidth="lg"
        sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 3, flexGrow: 1 }}
      >
        <Card
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: 350,
            width: 275,
            maxWidth: 275,
            flexGrow: 1,
            borderRadius: "10px",
            padding: "12px",
            backgroundColor: "#2C2C2C", // Dark background color
            border: "1px solid #444", // Dark border
          }}
        >
          <CardMedia
            component="img"
            height="175"
            image={thumbnail}
            alt={videoTitle}
            loading="lazy"
            sx={{ borderRadius: "8px" }} // Slightly rounded corners for the image
          />
          <CardContent sx={{ p: "10px" }}>
            <Typography fontSize="lg" color="#FFFFFF" sx={{ mt: 2 }}>
              {videoTitle.length > 45
                ? videoTitle.substr(0, 45) + "..."
                : videoTitle}
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
                  component={LinkRouter}
                  to={`/playlist/${playlistId}/watch/${videoId}`}
                >
                  <Button>
                    <Stack
                      direction={"row"}
                      spacing={1}
                      alignItems="center"
                      sx={{ ml: -2 }}
                    >
                      <PlayCircleOutlineIcon
                        sx={{ fontSize: 40, color: "#FF0000" }} // Red icon color for play button
                      />
                      <Typography
                        level="body2"
                        fontWeight={600}
                        sx={{ color: "#FF0000" }} // Red text color for the button
                      >
                        Play
                      </Typography>
                    </Stack>
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default VideoCard;
