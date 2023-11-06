import React from 'react';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import { Routes,Route } from 'react-router-dom';
import ProductDescription from './Components/ProductDescription';
import Checkout from './Components/Checkout';




function App() {
  return ( 
    <Routes> 
  
        <Route path="/" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/product/:id" element={<ProductDescription/>} />
        <Route path="/checkout" element={<Checkout/>} />
        
        

    </Routes>
 
  );
}

export default App;
