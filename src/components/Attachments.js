// File: src/components/Attachments.js
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { AttachFile } from '@mui/icons-material';

const Attachments = ({ onAttach }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    onAttach(files);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#fff' }}>
        Attachments
      </Typography>
      <Button
        variant="outlined"
        component="label"
        startIcon={<AttachFile />}
        sx={{
          marginY: 2,
          color: '#aaa',
          borderColor: '#444',
          '&:hover': { borderColor: '#fff' },
        }}
      >
        Upload Attachments
        <input
          type="file"
          hidden
          multiple
          onChange={handleFileChange}
        />
      </Button>
    </Box>
  );
};

export default Attachments;
