
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state =>state.cart.cart)

  return (
    <header>
      <h1>My Shopping App</h1>
      <div className="cart-icon">
        <FaShoppingCart />
    <Link to="/checkout"><h5>{cartItems.length}</h5></Link>
        <span className="cart-count"> </span> 
      </div>
    </header>
  );
};

export default Header;
