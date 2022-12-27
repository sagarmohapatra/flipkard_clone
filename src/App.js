import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { Box } from '@mui/system';
import DataProvider from './Component/Context/DataProvider';

function App() {
  return (
    // <React.StrictMode>
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </DataProvider>
    // </React.StrictMode>
  );
}

export default App;
