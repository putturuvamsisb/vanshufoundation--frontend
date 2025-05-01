// src/pages/UserProfile.js
import React, { useState } from 'react';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Vamsi Krishna',
    age: 25,
    phone: '+91 9876543210',
    email: 'vamsi@example.com',
    password: 'V@msi123'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({user, [name]: value });
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    // Add your actual logout logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // You can send the updated profile to backend here
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />

          <label>Age</label>
          <input type="number" name="age" value={user.age} onChange={handleChange} />

          <label>Phone</label>
          <input type="tel" name="phone" value={user.phone} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} />

          <button type="submit">Update Profile</button>
        </form>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
