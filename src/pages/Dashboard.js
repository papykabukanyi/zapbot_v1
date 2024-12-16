// File: src/pages/Dashboard.js
import React, { useState } from 'react';
import { Grid, Row, Col } from 'rsuite';
import CustomNavbar from '../components/Navbar';
import FileUpload from '../components/FileUpload';
import EmailTable from '../components/EmailTable';
import EmailComposer from '../components/EmailComposer';
import Logs from '../components/Logs';
import SettingsModal from '../components/SettingsModal';

const Dashboard = () => {
  const [emails, setEmails] = useState([]);
  const [logs, setLogs] = useState([]);
  const [jobStatus, setJobStatus] = useState([]);
  const [smtpSettings, setSmtpSettings] = useState({ username: '', password: '' });
  const [openSettings, setOpenSettings] = useState(false);
  const [activeKey, setActiveKey] = useState('emails');

  const handleSendEmail = async (data) => {
    const { subject, body, signature } = data;

    if (!smtpSettings.username || !smtpSettings.password) {
      setJobStatus((prev) => [...prev, 'Error: SMTP credentials not set!']);
      return;
    }

    const emailsToSend = emails.map((email) => email.email);
    setJobStatus((prev) => [...prev, `Sending emails to ${emailsToSend.length} recipients...`]);

    for (const email of emailsToSend) {
      try {
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: email,
            subject,
            body: `${body}\n\n${signature}`,
            smtp: smtpSettings,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setJobStatus((prev) => [...prev, `Success: Email sent to ${email}`]);
        } else {
          setJobStatus((prev) => [...prev, `Error: Failed to send email to ${email}`]);
        }
      } catch (error) {
        console.error(`Error sending email to ${email}:`, error);
        setJobStatus((prev) => [...prev, `Error: ${error.message}`]);
      }
    }
  };

  const handleManualEmails = (manualEmails) => {
    setEmails((prev) => [...prev, ...manualEmails]);
  };

  const handleFileUpload = (files) => {
    const uploadedEmails = files.map((file) => ({
      email: file.name, // Simulated email from file names for demo purposes
    }));
    setEmails((prev) => [...prev, ...uploadedEmails]);
  };

  return (
    <>
      <CustomNavbar
        onSettingsOpen={() => setOpenSettings(true)}
        activeKey={activeKey}
        onSelect={setActiveKey}
      />
      <div style={{ padding: 20 }}>
        <Grid fluid>
          <Row>
            {/* Left Panel */}
            <Col xs={24} sm={12} md={8}>
              <FileUpload
                onFileUpload={handleFileUpload}
                onManualEmails={handleManualEmails}
              />
              <EmailTable emails={emails} />
            </Col>
            {/* Right Panel */}
            <Col xs={24} sm={12} md={16}>
              <EmailComposer
                onSend={handleSendEmail}
                onSaveTemplate={(template) =>
                  console.log('Template saved:', template)
                }
                jobStatus={jobStatus}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Logs logs={logs} />
            </Col>
          </Row>
        </Grid>
        <SettingsModal
          open={openSettings}
          onClose={() => setOpenSettings(false)}
          smtpSettings={smtpSettings}
          setSmtpSettings={setSmtpSettings}
        />
      </div>
    </>
  );
};

export default Dashboard;
