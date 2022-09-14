import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const CircularLoader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
        }}
      />
    </Box>
  )
}

export default CircularLoader
