// File: src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const CustomNavbar = ({ onSettingsOpen, activeKey, onSelect }) => (
  <Navbar appearance="inverse" style={{ marginBottom: 20 }}>
    {/* Brand Logo */}
    <Navbar.Brand>
      <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
    </Navbar.Brand>

    {/* Navigation Items */}
    <Nav activeKey={activeKey} onSelect={onSelect}>
      <Nav.Item eventKey="emails" icon={<HomeIcon />}>
        Emails
      </Nav.Item>
    </Nav>
    <Nav.Item eventKey="calendar" icon={<HomeIcon />}>
        Calendar
    </Nav.Item>


    {/* Settings Icon on Right */}
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />} onClick={onSettingsOpen}>
        Settings
      </Nav.Item>
    </Nav>
  </Navbar>
);

export default CustomNavbar;
