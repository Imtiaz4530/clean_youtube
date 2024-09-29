import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayerCard from "./Videos/PlayerCard";

const init = {
  title: "",
  desc: "",
};

const Player = ({ playlists }) => {
  const [state, setState] = useState({ ...init });
  const [toggleDesc, setToggleDesc] = useState(false);
  const { id, v } = useParams();

  const collectStates = (obj) => {
    setState({ ...obj });
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        p: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "70%" } }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${v}`}
          controls={true}
          width="100%"
          height="auto"
          style={{ aspectRatio: "16/9" }}
          playing={true}
        />
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">{state.title || ""}</Typography>
            {!toggleDesc ? (
              <KeyboardArrowDownIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setToggleDesc(!toggleDesc)}
              />
            ) : (
              <KeyboardArrowUpIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setToggleDesc(!toggleDesc)}
              />
            )}
          </Box>
          {!toggleDesc && (
            <Typography sx={{ fontSize: "14px" }} mt={2}>
              {state.desc || ""}
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "25%" },
          mt: { xs: 4, md: 0 },
        }}
      >
        <PlayerCard
          playlists={playlists}
          v={v}
          id={id}
          collectStates={collectStates}
        />
      </Box>
    </Box>
  );
};

export default Player;
