import { Box } from '@mui/material';
import React from 'react'

export const Rightbar = () => {
  return (
    <Box bgcolor="green" flex={2} p={2} sx={{
      display: { xs: "none", sm: "block" },
    }}>rightbar</Box>
  )
}

export default Rightbar;