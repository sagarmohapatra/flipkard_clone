import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { Box } from '@mui/system';
import DataProvider from './Context/DataProvider';
import DetailView from "./Component/detail/DetailView"
import Cart from './Component/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [accounts, setaccounts] = React.useState("")
  return (
    <React.StrictMode>

      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>

    </React.StrictMode>
  );
}

export default App;
