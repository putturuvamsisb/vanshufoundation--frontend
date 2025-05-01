import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  // Check for user login status whenever component renders
  useEffect(() => {
    const checkUserLogin = () => {
      // Check for userData as set by your SignIn component
      const userData = localStorage.getItem('userData');
      console.log("Retrieved user data from localStorage:", userData); // For debugging
      
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setLoggedInUser(parsedUser);
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem('userData');
        }
      } else {
        setLoggedInUser(null);
      }
    };

    checkUserLogin();

    // Listen for storage events to detect changes from other tabs/windows
    window.addEventListener('storage', checkUserLogin);
    
    // Listen for the custom userLoggedIn event that your SignIn component dispatches
    window.addEventListener('userLoggedIn', checkUserLogin);

    return () => {
      window.removeEventListener('storage', checkUserLogin);
      window.removeEventListener('userLoggedIn', checkUserLogin);
    };
  }, []);

  const handleLogout = () => {
    // Clear all auth data as stored by SignIn component
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    
    setLoggedInUser(null);
    setDropdownOpen(false);
    setMenuActive(false);
    
    // Create and show a success toast for logout
    const successToast = document.createElement('div');
    successToast.className = 'toast success';
    successToast.textContent = 'Logged out successfully!';
    document.body.appendChild(successToast);
    
    setTimeout(() => {
      document.body.removeChild(successToast);
      navigate('/');
    }, 2000);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Aasha Foundation" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`main-nav ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuActive(false)}>About Us</Link></li>
            <li><Link to="/blog" onClick={() => setMenuActive(false)}>Blog</Link></li>
            <li><Link to="/media" onClick={() => setMenuActive(false)}>Media</Link></li>

            <li><Link to="/events" onClick={() => setMenuActive(false)}>Events</Link></li>
            <li><Link to="/volunteer" onClick={() => setMenuActive(false)}>Volunteer</Link></li>
            <li><Link to="/projects" onClick={() => setMenuActive(false)}>Projects</Link></li>
            <li><Link to="/get-involved" onClick={() => setMenuActive(false)}>Get Involved</Link></li>
            <li><Link to="/donate" onClick={() => setMenuActive(false)}>Donate</Link></li>
            <li><Link to="/contact" onClick={() => setMenuActive(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Auth Section */}
        <div className="auth-section">
          {!loggedInUser ? (
            <Link to="/signin" className="signin-button">Sign In</Link>
          ) : (
            <div className="user-profile" onClick={toggleDropdown}>
              <div className="user-avatar">
                {loggedInUser.name ? loggedInUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <span className="user-name">{loggedInUser.name || 'User'}</span>
                    <span className="user-email">{loggedInUser.email || 'No email'}</span>
                  </div>
                  <ul>
                    <li><Link to="/userprofile" onClick={() => setDropdownOpen(false)}>Settings</Link></li>
                    <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;