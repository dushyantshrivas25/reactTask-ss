
import React from 'react';
import { Link } from 'react-router-dom';



const products = [
  { id: 1, name: 'T-shirt',
   image:"https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    price: 199 },
  { id: 2, name: 'Jeans',
  image:"https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D",
   price: 999 },
  { id: 3, name: 'Camera',
  image:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww", price: "35,999" },

 
 
];

const ProductList = () => {
  return ( 
    <div className='product-list'>
   
      {products.map((Product) => (
        <div key={Product.id} className="product">
           <img src={Product.image} alt="" />
          <h3>{Product.name}</h3>
          <p>price: ${Product.price}</p>
          <Link className='btn btn-success' to={`/product/${Product.id}`}>View Details</Link>
        </div>
      ))}

    </div>
  );
};

export default ProductList;
