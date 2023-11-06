import React from 'react';
import Header from './Header'; 
import ProductList from './ProductList';


const Homepage = () => {

  return (
    <div className="homepage">
      <Header /> 
      
      <div className="product-list">
        
        <ProductList/>
        
      </div>
    </div>
  );
};

export default Homepage;
