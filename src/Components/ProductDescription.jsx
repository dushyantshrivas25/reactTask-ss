import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from '../redux/cartSlice';






const productData = [
  { id: 1,image:"https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",

     name: 'T-shirt', description: 'A comfortable T-shirt.', price: 199 },
  { id: 2,
    image:"https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D", name: 'Jeans', description: 'Stylish jeans for any occasion.', price: 999 },
  { id: 3, image:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww", price: 35999 },
  { id: 4, image: "https://images.pexels.com/photos/1161528/pexels-photo-1161528.jpeg?auto=compress&cs=tinysrgb&w=600", name: 'Shoes', description: 'Stylish shoes for any outfit.', price: 299 },
  { id: 5, image: "https://media.istockphoto.com/id/173834180/photo/pirate-hat.webp?b=1&s=170667a&w=0&k=20&c=tGi6HNkigvNDwPeBL0dNwEDUSLhUCa9EvW3w_V4dMcs=", name: 'Hat', description: 'A fashionable hat for all occasions.', price: 49 },
  { id: 6, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdHRsZSUyMCUyQ2dvZ2dsZSUyQ2Z1cm5pdHVyZSUyQ3xlbnwwfHwwfHx8MA%3D%3D", name: 'furniture', description: 'A fashionable hat for all occasions.', price: 49 },
  { id: 7, image: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBob25lfGVufDB8fDB8fHww", name: 'Mobile', description: 'A fashionable hat for all occasions.', price: 49 },
  { id: 8, image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D", name: 'TV', description: 'A fashionable hat for all occasions.', price: 49 },

];
const recommendedProducts = [
  { id: 4, image: "https://images.pexels.com/photos/1161528/pexels-photo-1161528.jpeg?auto=compress&cs=tinysrgb&w=600", name: 'Shoes', description: 'Stylish shoes for any outfit.', price: 299 },
  { id: 5, image: "https://media.istockphoto.com/id/173834180/photo/pirate-hat.webp?b=1&s=170667a&w=0&k=20&c=tGi6HNkigvNDwPeBL0dNwEDUSLhUCa9EvW3w_V4dMcs=", name: 'Hat', description: 'A fashionable hat for all occasions.', price: 49 },
  { id: 6, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdHRsZSUyMCUyQ2dvZ2dsZSUyQ2Z1cm5pdHVyZSUyQ3xlbnwwfHwwfHx8MA%3D%3D", name: 'furniture', description: 'A fashionable hat for all occasions.', price: 49 },
  { id: 7, image: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBob25lfGVufDB8fDB8fHww", name: 'Mobile', description: 'A fashionable hat for all occasions.', price: 49 },
  { id: 8, image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D", name: 'TV', description: 'A fashionable hat for all occasions.', price: 49 },
  
];


const ProductDescription = ({}) => {
 
  const { id } = useParams(); 
 

  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const selectedProduct = productData.find((product) => product.id === parseInt(id, 10));

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id]);


  
 
  const filteredRecommendedProducts = recommendedProducts.filter((product) => product.id !== parseInt(id, 10));

 
  const dispatch = useDispatch();

  return ( <>
   <Header  />

    <div className="product-description">
     
      {product ? (
        <> <img src={product.image} alt="" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(addtoCart(product,id))}>Add to cart</button>

         
        </>
      ) : (
        <p>Product not found.</p>
      )}
    
    </div>

    

    <div className="recommended-products">
        <h3 className='r-p'>Recommended Products</h3>
        <div className="product-list">
          {filteredRecommendedProducts.map((recommendedProduct) => (
            <div key={recommendedProduct.id} className="product">
              <img src={recommendedProduct.image} alt="" />
              <h3>{recommendedProduct.name}</h3>
              <p className='text-danger'>Price: ${recommendedProduct.price}</p>
              <Link className='btn btn-warning ' to={`/product/${recommendedProduct.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    <Link className='btn btn-dark ' to="/homepage">Back to Homepage</Link>
    </>
    
  );
};

export default ProductDescription;

