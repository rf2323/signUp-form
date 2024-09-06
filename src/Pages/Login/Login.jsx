import React, { useState } from 'react';
import './login.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === location.state.email && password === location.state.password) {
      navigate('/profile', { state: location.state });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email..."
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;
