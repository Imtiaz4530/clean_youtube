import { createStore } from "easy-peasy";
import playlistModel from "./playlistModel";
import recentModel from "./recentModel";
import favoriteModel from "./favoriteModel";

const store = createStore({
    playlists: playlistModel, recents: recentModel, favorites: favoriteModel
})

export default store