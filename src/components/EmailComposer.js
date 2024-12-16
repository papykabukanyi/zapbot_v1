// File: src/components/EmailComposer.js
import React, { useState } from 'react';
import { Input, Button, Divider, Modal, DatePicker } from 'rsuite';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EmailComposer = ({ onSend, onSchedule, jobStatus }) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [signature, setSignature] = useState('');
  const [scheduleModal, setScheduleModal] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleSend = () => {
    onSend({ subject, body, signature });
  };

  const handleAddDate = (date) => {
    if (!selectedDates.includes(date)) {
      setSelectedDates((prev) => [...prev, date]);
    }
  };

  const handleSchedule = () => {
    onSchedule({ subject, body, signature, dates: selectedDates });
    setScheduleModal(false);
  };

  return (
    <div>
      <h5 style={{ color: '#fff', marginBottom: 20 }}>Email Composition</h5>
      <Input
        placeholder="Subject (Template Name)"
        value={subject}
        onChange={setSubject}
        style={{
          marginBottom: 10,
          backgroundColor: '#333',
          color: '#fff',
        }}
      />
      <ReactQuill
        theme="snow"
        value={body}
        onChange={setBody}
        style={{
          height: '150px',
          marginBottom: 20,
          backgroundColor: '#333',
          color: '#fff',
        }}
      />
      <Input
        as="textarea"
        rows={3}
        placeholder="Signature"
        value={signature}
        onChange={setSignature}
        style={{
          marginBottom: 10,
          backgroundColor: '#333',
          color: '#fff',
        }}
      />
      <Button appearance="primary" onClick={handleSend} style={{ marginRight: 10 }}>
        Send Email
      </Button>
      <Button
        appearance="ghost"
        onClick={() => setScheduleModal(true)}
        style={{ marginRight: 10 }}
      >
        Schedule
      </Button>
      <Button appearance="ghost">Save Template</Button>
      <Divider style={{ backgroundColor: '#555' }} />

      <Modal open={scheduleModal} onClose={() => setScheduleModal(false)} size="sm">
        <Modal.Header>
          <Modal.Title>Schedule Emails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker
            block
            format="yyyy-MM-dd HH:mm:ss"
            onChange={(value) => handleAddDate(value)}
          />
          <div style={{ marginTop: 20 }}>
            <h6>Selected Dates:</h6>
            {selectedDates.map((date, idx) => (
              <div key={idx}>{new Date(date).toString()}</div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSchedule} appearance="primary">
            Schedule
          </Button>
          <Button onClick={() => setScheduleModal(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmailComposer;
