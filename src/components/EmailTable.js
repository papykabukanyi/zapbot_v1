// File: src/components/EmailTable.js
import React from 'react';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const EmailTable = ({ emails }) => (
  <div>
    <h5 style={{ color: '#fff', marginBottom: 20 }}>Loaded Emails</h5>
    <Table
      height={400}
      data={emails}
      style={{ backgroundColor: '#1c1c1c', color: '#fff' }}
    >
      <Column width={300} align="center">
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
  </div>
);

export default EmailTable;
