import React from 'react';
import './profile.css';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { firstName, lastName, age, email, image } = location.state;

  return (
    <div className="profile">
      <div className="properties">
        <img src={image} alt="pfp"/>
        <section>
          <p className="firstName">{firstName}</p>
          <p className="lastName">{lastName}</p>
          <p className="age">Age: {age}</p>
          <p className="email">{email}</p>
        </section>
      </div>
      <div className="bio"></div>
    </div>
  );
}

export default Profile;
