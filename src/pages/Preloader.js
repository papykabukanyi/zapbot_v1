// File: src/pages/Preloader.js
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Preloader = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#1c1c1c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/logo.png" // Corrected path for logo
        alt="Logo"
        sx={{
          height: 120,
          marginBottom: 4,
        }}
      />
      {/* Loading Text */}
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: 2 }}>
        Loading ZaPBot...
      </Typography>
      {/* Progress Bar */}
      <CircularProgress
        size={80}
        sx={{
          color: '#90caf9',
          marginBottom: 4,
        }}
      />
    </Box>
  );
};

export default Preloader;
