import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Routes from './Routes'
import { ThemeProvider } from './ThemeProvider'
import Box from '@mui/material/Box'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Routes />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
