import React from 'react';
import './style.css';

const Product = ({ name, price,id }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
  
    </div>
  );
};

export default Product;
