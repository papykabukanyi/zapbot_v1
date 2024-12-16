import React from 'react';
import { Box, Typography } from '@mui/material';

const Logs = ({ logs }) => (
  <Box
    sx={{
      border: '1px solid #ccc',
      padding: 2,
      maxHeight: 200,
      overflowY: 'auto',
    }}
  >
    {logs.map((log, index) => (
      <Typography key={index}>{log}</Typography>
    ))}
  </Box>
);

export default Logs;
