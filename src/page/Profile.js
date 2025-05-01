import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading-spinner-container"><div className="loading-spinner"></div></div>;
  }

  // Redirect to sign in if not logged in
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h1>{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since:</span>
              <span className="info-value">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Activity Summary</h2>
          <div className="profile-stats">
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-label">Donations</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-label">Volunteer Hours</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-label">Events Attended</span>
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Account Settings</h2>
          <button className="profile-button">Edit Profile</button>
          <button className="profile-button">Change Password</button>
          <button className="profile-button secondary">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;