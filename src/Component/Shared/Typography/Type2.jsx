// import { Box, Typography } from '@mui/material'

// const Typo2 = ({type}) => {
//     return (
//         <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7e7e7e', mt: 5, mb: 15}} >
//             <Typography variant='h5'>{type}</Typography>
//         </Box>
//     )
// }

// export default Typo2

import { Box, Typography } from "@mui/material";

const Typo2 = ({ type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#B0B0B0",
        mt: 5,
        mb: 15,
      }}
    >
      <Typography variant="h5">{type}</Typography>
    </Box>
  );
};

export default Typo2;
