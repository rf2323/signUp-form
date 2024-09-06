import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink to="/" end>Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default Navigation;
