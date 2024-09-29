export const usePlaylist = (playlists) => {
  if (playlists.length === 0) {
    return;
  }

  const playlist = Object.values(playlists);

  return playlist;
};

export const useRecentAndFavorites = (playlists, ids) => {
  return ids.map((id) => playlists[id]);
};

export const usePlayer = (playlists, playlistId, videoId) => {
  const videos = playlists?.data[playlistId]?.playlistItems;
  const videoIndex = videos.findIndex(
    (item) => item.contentDetails.videoId === videoId
  );
  const obj = videos.map((item) => item.contentDetails.videoId);
  const nextListId = obj.slice(videoIndex, videoIndex + 3);

  const nextList = videos.reduce((acc, cur) => {
    if (
      nextListId.filter((id) => id === cur?.contentDetails?.videoId).length > 0
    ) {
      acc.push(cur);
    }
    return acc;
  }, []);

  return {
    nextList,
    videoIndex,
  };
};
