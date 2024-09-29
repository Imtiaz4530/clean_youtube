import axios from "axios"

const key = 'AIzaSyBQaxNw7ADAUoCC-afs23G3KlzJTFlBslI'

const getPlaylistItem = async ( playlistId, pageToken = '', result = [] ) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${key}&part=contentDetails, id, snippet&playlistId=${playlistId}&maxResults=30&pageToken=${pageToken}`

    const {data} = await axios.get(URL)
    
    result = [...result, ...data.items]

    if (data?.nextPageToken) {
        result = getPlaylistItem(playlistId, data.nextPageToken, result)
    }

    return result
}

const getPlaylist = async (playlistId) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2C%20id%2C%20snippet&id=${playlistId}&key=${key}`

    const {data} = await axios.get(URL)
    const {channelId, channelTitle, description, thumbnails, title} = data?.items[0]?.snippet

    let channelThumbnails
    if (channelId) {
        const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2C%20id%2C%20snippet&id=${channelId}&key=${key}`
        const {data} = await axios.get(CHANNEL_URL)
        const {thumbnails} = data?.items[0]?.snippet
        channelThumbnails = thumbnails?.high
    }

    let playlistItems = await getPlaylistItem(playlistId)    
    playlistItems = playlistItems.map((items) => {
        const {description, title, thumbnails: {medium}} = items?.snippet

        return {description, title, thumbnails: medium, contentDetails: items?.contentDetails}
    })

    return {
        channelId, channelTitle, playlistDescription: description, playlistTitle: title, playlistThumbnail: thumbnails.high, playlistId, playlistItems, channelThumbnails
    }
}

export default getPlaylist