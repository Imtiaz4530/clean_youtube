// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
// } from "@mui/material";

// const DeleteConfirmation = ({ open, handleClose, playlistsAction, id }) => {
//   const handleDelete = () => {
//     // playlistsAction.deleteFromPlaylist(id)
//     console.log("deleted");
//     handleClose();
//   };

//   return (
//     <>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure u want to delete it?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDelete}>Yes</Button>
//           <Button onClick={handleClose}>No</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default DeleteConfirmation;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const DeleteConfirmation = ({ open, handleClose, playlistsAction, id }) => {
  const handleDelete = () => {
    playlistsAction.deleteFromPlaylist(id);
    console.log("deleted");
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#fff" }}
          >
            Are you sure you want to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDelete}
            sx={{ color: "#FF0000", textTransform: "none" }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            sx={{ color: "#FFF", textTransform: "none" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteConfirmation;
