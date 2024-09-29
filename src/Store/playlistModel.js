import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../API/getPlaylist";

const playlistModel = persist({
  data: {},
  isLoading: false,
  error: "",

  addToPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
    state.data = {
      ...Object.fromEntries(Object.entries(state.data).slice(-8)),
    };
  }),

  deleteFromPlaylist: action((state, payload) => {
    if (state.data.hasOwnProperty(payload)) {
      const { [payload]: _, ...newData } = state.data; // Omit the property
      state.data = newData; // Update the state
    }
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setError: action((state, payload) => {
    state.error = payload;
  }),
  resetError: action((state) => {
    state.error = "";
  }),

  getPlaylist: thunk(async (action, payload, helper) => {
    if (helper.getState().data[payload]) {
      return;
    }

    action.setLoading(true);
    try {
      const playlist = await getPlaylist(payload);
      action.addToPlaylist(playlist);
      action.setError("");
    } catch (e) {
      action.setError(e?.message);
    } finally {
      action.setLoading(false);
    }
  }),
});

export default playlistModel;
