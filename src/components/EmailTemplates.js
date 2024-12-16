import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

const EmailTemplates = ({ templates, onSaveTemplate }) => {
  const [newTemplate, setNewTemplate] = useState('');

  const handleSave = () => {
    if (newTemplate) {
      onSaveTemplate(newTemplate);
      setNewTemplate('');
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Email Templates
      </Typography>
      <TextField
        fullWidth
        value={newTemplate}
        onChange={(e) => setNewTemplate(e.target.value)}
        placeholder="Create a new email template..."
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        sx={{ marginY: 2 }}
        onClick={handleSave}
      >
        Save Template
      </Button>

      <Typography variant="h6">Templates</Typography>
      {templates.map((template, index) => (
        <Box key={index} sx={{ marginY: 1 }}>
          <Typography>{template}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default EmailTemplates;
