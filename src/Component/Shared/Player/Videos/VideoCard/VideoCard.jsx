import {Card, CardMedia, CardContent, Typography, Box, Container, Link  } from '@mui/material';
import { useEffect } from 'react';
import {Link as LinkRouter} from 'react-router-dom'

const VideoCard = ({videoId, thumbnail, videoTitle, videoDescription, playlistId, collectStates}) => {

    useEffect(() => {
        if (videoTitle || videoDescription) {
            collectStates({title: videoTitle, desc: videoDescription})
        }
    }, [videoTitle, videoDescription])

    return (
        <Link sx={{ textDecoration: 'none' }} component={LinkRouter} to={`/playlist/${playlistId}/watch/${videoId}`}>
            <Box component="div" >
                <Container maxWidth='lg' sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 3, flexGrow: 1 }} >
                    <Card component="div" sx={{ display: 'flex', flexDirection: 'column', minHeight: 200, width: 200,maxWidth:200, flexGrow: 1, borderRadius: '10px', padding: "12px", border: '1px solid #ddd' }}>
                        <CardMedia component="img" height="115" image={thumbnail} alt={videoTitle} loading='lazy' />
                        <CardContent  sx={{p: "10px"}}>
                            <Typography fontSize="lg" color="#000000" sx={{ mt: 2 }}>{videoTitle.length > 20 ? videoTitle.substr(0, 20) + '...' : videoTitle }</Typography>
                        </CardContent>
                    </Card>
                </ Container>
            </Box> 
        </Link>
    );
}

export default VideoCard