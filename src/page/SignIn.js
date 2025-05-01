import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/SignIn.css';

const BASE_URL = 'http://localhost:8000/api';

const SignIn = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [forgotModal, setForgotModal] = useState(false);
    const [otpEmail, setOtpEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setError('');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    // Use useCallback to memoize handleSubmit
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (isSignUp && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            setIsLoading(false);
            return;
        }

        try {
            const url = isSignUp ? `${BASE_URL}/signup/` : `${BASE_URL}/signin/`;
            const data = isSignUp
                ? {
                    name: formData.name,
                    email: formData.email,
                    phone: '9999999999',
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                }
                : {
                    email: formData.email,
                    password: formData.password,
                };

            const csrfToken = Cookies.get('csrftoken');

            const res = await axios.post(url, data, {
                headers: {
                    'X-CSRFToken': csrfToken,
                },
            });
            
            if (!isSignUp) {
                // Store user data and tokens
                localStorage.setItem('accessToken', res.data.access);
                localStorage.setItem('refreshToken', res.data.refresh);
                localStorage.setItem('userData', JSON.stringify(res.data.user));
                
                // Dispatch event to notify other components (like Header) that user logged in
                window.dispatchEvent(new Event('userLoggedIn'));
                
                // Show success message and redirect
                const successToast = document.createElement('div');
                successToast.className = 'toast success';
                successToast.textContent = 'Login successful!';
                document.body.appendChild(successToast);
                
                setTimeout(() => {
                    document.body.removeChild(successToast);
                    navigate('/');
                }, 2000);
            } else {
                // Show success message for signup
                const successToast = document.createElement('div');
                successToast.className = 'toast success';
                successToast.textContent = 'Registration successful! Please sign in.';
                document.body.appendChild(successToast);
                
                setTimeout(() => {
                    document.body.removeChild(successToast);
                    setIsSignUp(false);
                }, 2000);
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || 'Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }, [isSignUp, formData, navigate]);

    const handleSendOtp = async () => {
        if (!otpEmail) {
            setError('Please enter your email address');
            return;
        }
        
        setIsLoading(true);
        try {
            const csrfToken = Cookies.get('csrftoken');
            const res = await axios.post(
                `${BASE_URL}/forgot-password/`,
                { email: otpEmail },
                { headers: { 'X-CSRFToken': csrfToken } }
            );
            
            const successToast = document.createElement('div');
            successToast.className = 'toast success';
            successToast.textContent = res.data.message || 'OTP sent successfully!';
            document.body.appendChild(successToast);
            
            setTimeout(() => {
                document.body.removeChild(successToast);
            }, 2000);
            
            setOtpSent(true);
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to send OTP');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!otp || !newPassword) {
            setError('Please fill all fields');
            return;
        }
        
        setIsLoading(true);
        try {
            const csrfToken = Cookies.get('csrftoken');
            const res = await axios.post(
                `${BASE_URL}/reset-password/`,
                { email: otpEmail, otp, newPassword },
                { headers: { 'X-CSRFToken': csrfToken } }
            );
            
            const successToast = document.createElement('div');
            successToast.className = 'toast success';
            successToast.textContent = res.data.message || 'Password reset successful!';
            document.body.appendChild(successToast);
            
            setTimeout(() => {
                document.body.removeChild(successToast);
                setForgotModal(false);
                setOtpSent(false);
                setOtp('');
                setNewPassword('');
                setOtpEmail('');
                setError('');
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.error || 'Reset failed!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form-box">
                <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Full Name</label>
                        </div>
                    )}
                    
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=" "
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    
                    {isSignUp && (
                        <div className="form-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder=" "
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    )}
                    
                    <button type="submit" className={isLoading ? 'loading' : ''} disabled={isLoading}>
                        {isLoading ? (
                            <span className="spinner"></span>
                        ) : (
                            isSignUp ? 'Sign Up' : 'Sign In'
                        )}
                    </button>
                </form>

                {!isSignUp && (
                    <p className="forgot-password" onClick={() => setForgotModal(true)}>
                        Forgot Password?
                    </p>
                )}

                <p className="toggle-text">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <span onClick={toggleMode}>{isSignUp ? ' Sign In' : ' Sign Up'}</span>
                </p>
            </div>

            {forgotModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Reset Password</h3>
                            
                            {error && <div className="error-message">{error}</div>}
                            
                            {!otpSent ? (
                                <>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="otpEmail"
                                            placeholder=" "
                                            value={otpEmail}
                                            onChange={(e) => setOtpEmail(e.target.value)}
                                        />
                                        <label htmlFor="otpEmail">Email Address</label>
                                    </div>
                                    <button 
                                        onClick={handleSendOtp}
                                        className={isLoading ? 'loading' : ''}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <span className="spinner"></span> : 'Send OTP'}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="otp"
                                            placeholder=" "
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                        <label htmlFor="otp">Enter OTP</label>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            id="newPassword"
                                            placeholder=" "
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                        <label htmlFor="newPassword">New Password</label>
                                    </div>
                                    <button 
                                        onClick={handleResetPassword}
                                        className={isLoading ? 'loading' : ''}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <span className="spinner"></span> : 'Reset Password'}
                                    </button>
                                </>
                            )}
                            <button 
                                onClick={() => {
                                    setForgotModal(false);
                                    setOtpSent(false);
                                    setOtp('');
                                    setNewPassword('');
                                    setOtpEmail('');
                                    setError('');
                                }}
                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;