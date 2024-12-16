import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const SettingsModal = ({ open, onClose, smtpSettings, setSmtpSettings }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        padding: 4,
        boxShadow: 24,
      }}
    >
      <Typography variant="h6">SMTP Settings</Typography>
      <TextField
        fullWidth
        label="SMTP Username"
        value={smtpSettings.username}
        onChange={(e) =>
          setSmtpSettings((prev) => ({ ...prev, username: e.target.value }))
        }
        sx={{ marginY: 2 }}
      />
      <TextField
        fullWidth
        label="SMTP Password"
        type="password"
        value={smtpSettings.password}
        onChange={(e) =>
          setSmtpSettings((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={onClose}
      >
        Save
      </Button>
    </Box>
  </Modal>
);

export default SettingsModal;
