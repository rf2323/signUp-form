import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, age, email, password } = e.target;
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      email: email.value,
      password: password.value,
      image: image
    };
    navigate('/login', { state: newUser });
    e.target.reset();
    setImage(null);
  };

  return (
    <div>
      <form className="register" onSubmit={handlerSubmit}>
        <h2>Registration</h2>
        <input type="text" placeholder="Enter the FirstName" name="firstName" />
        <input type="text" placeholder="Enter the LastName" name="lastName" />
        <input type="text" placeholder="Enter the Age" name="age" />
        <input type="text" placeholder="Enter the Email" name="email" />
        <input type="password" placeholder="Enter the Password" name="password" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <img src={image} alt="pfp"/>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Registration;
