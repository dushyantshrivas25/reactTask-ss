import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); 

const navigate = useNavigate(); 

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
  
      setLoginStatus('success');
     
       navigate("/homepage")
       
    } else {
      setLoginStatus('error'); 
    }
  };

  return (
    <div className='container w-100 mx-5 p-5'>
      <h2>Login</h2>
      <form className=' container form-control w-100   '>
       
       
          <input
          className='form-control mb-3'
            type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
   
      
        
          <input
           className='form-control mb-3'
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
   
        <button type="button" onClick={handleLogin}>
          Sign In
        </button>
      </form>
      
      
      {loginStatus === 'success' && (
        <div className="success-message">Login successful. Redirecting...</div>
      )}
      {loginStatus === 'error' && (
        <div className="error-message">Invalid credentials. Please try again.</div>
      )}
    </div>
  );
};

export default Login;
