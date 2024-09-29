import { Box, Container, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

import VideoCard from './VideoCard/VideoCard'
import Typo2 from '../../Typography/Type2'
import { usePlayer } from '../../../../hook/usePlaylist'

const PlayerCard = ({playlists, v, id, collectStates}) => {
    const {nextList, videoIndex} = usePlayer(playlists, id, v)
    const [toggleList, setToggleList] = useState(false)

    return (
        <Container  maxWidth={'xl'} sx={{border: '1px solid #b6b6b6', pb: 5}} >
            <Box sx={{width: 245, display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1}}>
                <Typography variant='h6'>{videoIndex+1}/{playlists?.data[id]?.playlistItems.length}</Typography>
                {!toggleList ? <KeyboardArrowDownIcon sx={{cursor: 'pointer'}} onClick={() => setToggleList(!toggleList)} /> : <KeyboardArrowUpIcon sx={{cursor: 'pointer'}}  onClick={() => setToggleList(!toggleList)} />}
            </Box>
            

            {!toggleList && (nextList.length === 0 ?
            <Typo2 type={"No more videos in this playlist!!!"} /> 
            : 
            (<Box sx={{}} > 
                {nextList.map((item) => (
                    <VideoCard key={item?.contentDetails?.videoId} playlistId={id} videoId={item?.contentDetails?.videoId} thumbnail={item?.thumbnails?.url} videoTitle={item?.title} videoDescription={item?.description} collectStates={collectStates} /> 
                    
                ))}
            </Box>
            ))}
        </Container>
    )
}

export default PlayerCard