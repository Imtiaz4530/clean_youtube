const key = 'AIzaSyBQaxNw7ADAUoCC-afs23G3KlzJTFlBslI'

const getChannel = async (channelId) => {
    const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2C%20id%2C%20snippet&id=${channelId}&key=${key}`
    const {data} = await axios.get(URL)
    
}



`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2C%20id%2C%20snippet&id=UCrmHQdRbYKFsB602Duho4Tw&key=[YOUR_API_KEY]`