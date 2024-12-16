import React, { useState } from 'react';
import { Calendar, Modal, Button } from 'rsuite';

const ScheduledCalendar = ({ scheduledEmails, onCancel }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const emailsForDate = scheduledEmails.filter(
    (email) => new Date(email.date).toDateString() === selectedDate?.toDateString()
  );

  return (
    <div>
      <Calendar onSelect={setSelectedDate} onDayClick={() => setOpenModal(true)} />
      <Modal open={openModal} onClose={() => setOpenModal(false)} size="sm">
        <Modal.Header>
          <Modal.Title>Scheduled Emails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emailsForDate.length > 0 ? (
            emailsForDate.map((email, idx) => (
              <div key={idx}>
                <strong>To:</strong> {email.to}
                <br />
                <strong>Subject:</strong> {email.subject}
                <br />
                <strong>Date:</strong> {new Date(email.date).toString()}
                <br />
                <Button onClick={() => onCancel(email.jobId)} appearance="link">
                  Cancel
                </Button>
                <hr />
              </div>
            ))
          ) : (
            <p>No emails scheduled for this date.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ScheduledCalendar;
