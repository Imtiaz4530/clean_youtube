// import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
// import { useState } from 'react';
// import extractLink from '../../../utils/linkExtractor';

// const PlaylistForm = ({open, handleClose, playlistsAction}) => {
//     const [state, setState] = useState('')

//     const handleSubmit = (id) => {
//         if (!id) {
//             alert("Invalid state! Please provide valid playlist-ID")
//         } else {
//             playlistsAction.getPlaylist(extractLink(id))
//             setState('')
//             handleClose()
//         }
//     }

//     return (
//         <>
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Add Playlist</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         You should add one valid playlist ID or playlist link, Otherwise it will give you an error!!!
//                     </DialogContentText>
//                     <TextField
//                     autoFocus
//                     required
//                     margin="dense"
//                     id="playlist"
//                     name="playlist"
//                     label="Playlist-ID"
//                     type="text"
//                     fullWidth
//                     variant="standard"
//                     onChange={(e) => setState(e.target.value)}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleClose}>Cancel</Button>
//                   <Button onClick={() => handleSubmit(state)} type="submit">Add</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//       );
// }

// export default PlaylistForm

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import extractLink from "../../../utils/linkExtractor";

const PlaylistForm = ({ open, handleClose, playlistsAction }) => {
  const [state, setState] = useState("");

  const handleSubmit = (id) => {
    if (!id) {
      alert("Invalid state! Please provide valid playlist-ID");
    } else {
      playlistsAction.getPlaylist(extractLink(id));
      setState("");
      handleClose();
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ backdropFilter: "blur(5px)" }}
      >
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#121212", color: "#E0E0E0" }}>
          <DialogContentText>
            You should add one valid playlist ID or playlist link, Otherwise it
            will give you an error!!!
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlist"
            name="playlist"
            label="Playlist-ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
            InputProps={{
              style: { backgroundColor: "#1E1E1E", color: "#E0E0E0" },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#1E1E1E" }}>
          <Button onClick={handleClose} sx={{ color: "#E0E0E0" }}>
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(state)}
            type="submit"
            sx={{ color: "#FFFFFF" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PlaylistForm;
