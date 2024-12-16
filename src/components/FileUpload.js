// File: src/components/FileUpload.js
import React, { useState } from 'react';
import { Uploader, Input, Button, Divider } from 'rsuite';

const FileUpload = ({ onFileUpload, onManualEmails }) => {
  const [manualEmails, setManualEmails] = useState('');

  const handleImportEmails = () => {
    const emails = manualEmails
      .split(',')
      .map((email) => ({ email: email.trim() }))
      .filter((email) => email.email);
    onManualEmails(emails);
    setManualEmails(''); // Clear input field
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <h5 style={{ color: '#fff', marginBottom: 10 }}>Upload Files & Enter Emails</h5>
      <Uploader
        action="/fake-url"
        draggable
        multiple
        style={{ marginBottom: 20 }}
        onChange={(files) => onFileUpload(files.map((file) => file.blobFile))}
      >
        <div style={{ lineHeight: '100px', textAlign: 'center', color: '#aaa' }}>
          Drag & Drop files here or click to upload
        </div>
      </Uploader>
      <Input
        value={manualEmails}
        placeholder="Enter Emails (comma-separated)"
        onChange={(value) => setManualEmails(value)}
        style={{
          marginBottom: 10,
          backgroundColor: '#333',
          color: '#fff',
        }}
      />
      <Button
        appearance="primary"
        onClick={handleImportEmails}
        disabled={!manualEmails.trim()}
        style={{ backgroundColor: '#444', color: '#fff', marginBottom: 10 }}
      >
        Import Emails
      </Button>
      <Divider style={{ backgroundColor: '#555' }} />
    </div>
  );
};

export default FileUpload;
