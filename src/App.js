// File: src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Preloader from './pages/Preloader';
import { CustomProvider } from 'rsuite'; // Import CustomProvider for theme

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Wrap the app with CustomProvider to apply the dark theme
    <CustomProvider theme="dark">
      {loading ? <Preloader /> : <Dashboard />}
    </CustomProvider>
  );
};

export default App;
