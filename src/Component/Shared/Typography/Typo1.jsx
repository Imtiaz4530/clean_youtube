// import { Box, Typography } from '@mui/material'

// const Typo1 = ({type}) => {
//     return (
//         <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6d6d6d', mt: 5}} >
//             <Typography variant='h3'>{type}</Typography>
//         </Box>
//     )
// }

// export default Typo1

import { Box, Typography } from "@mui/material";

const Typo1 = ({ type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#E0E0E0",
        mt: 5,
      }}
    >
      <Typography variant="h3">{type}</Typography>
    </Box>
  );
};

export default Typo1;
