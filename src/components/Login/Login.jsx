// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
      setUser(response.data);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div className="login-container">
          <h1>Login</h1>
          <div className='login-fields'>
            <input type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button> 
          <div className="last-row">
            <p className="login-signup">Don´t have an account? </p>
            <p className='login-signup-button'>Signup here</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
