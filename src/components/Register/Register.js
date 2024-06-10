// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/register`, { email, password });
      alert('User created successfully!');
    } catch (error) {
      alert('User creation failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default Register;
