import React, { useState } from 'react';
import './login.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Base API URL - adjust based on your environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2076';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [registerData, setRegisterData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
    setSuccess('');
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Client-side validation
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    if (!registerData.acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setSuccess(`Registration successful! Welcome ${data.user.fullName}!`);
      
      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      // Reset form
      setRegisterData({
        fullName: '',
        gender: '',
        dob: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
      });

      // Switch to login mode after successful registration
      setTimeout(() => {
        setIsLoginMode(true);
        setSuccess('');
      }, 3000);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...loginData,
          rememberMe
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setSuccess('Login successful!');
      
      // Store token and user data
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // If remember me is checked, store for longer
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
      }

      // Reset form
      setLoginData({ email: '', password: '' });

      // Redirect to dashboard or home page after successful login
      setTimeout(() => {
        window.location.href = '/dashboard'; // Change this to your dashboard route
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt('Please enter your email address:');
    
    if (!email) return;
    
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      alert(data.message || 'Password reset instructions sent to your email');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <Nav />
        <div className="login-wrapper">
          <div className="login-content">
            <div className="login-card">
              <div className="login-header">
                <h2 className="login-title">{isLoginMode ? 'Student Login' : 'Create Student Account'}</h2>
                <p className="login-subtitle">{isLoginMode ? 'Sign in to continue' : 'Register to get started'}</p>
                
                {/* Success and Error Messages */}
                {error && (
                  <div className="login-error-message">
                    ⚠️ {error}
                  </div>
                )}
                {success && (
                  <div className="login-success-message">
                    ✅ {success}
                  </div>
                )}
                
                <div className="login-tabs">
                  <button 
                    className={`login-tab-btn ${isLoginMode ? 'login-tab-active' : ''}`}
                    onClick={() => {
                      setIsLoginMode(true);
                      setError('');
                      setSuccess('');
                    }}
                    disabled={isLoading}
                  >
                    Login
                  </button>
                  <button 
                    className={`login-tab-btn ${!isLoginMode ? 'login-tab-active' : ''}`}
                    onClick={() => {
                      setIsLoginMode(false);
                      setError('');
                      setSuccess('');
                    }}
                    disabled={isLoading}
                  >
                    Register
                  </button>
                </div>
              </div>

              {isLoginMode ? (
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <div className="login-form-group">
                    <label className="login-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                      placeholder="student@gmail.com"
                      className="login-input"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="login-form-group">
                    <label className="login-label">Password</label>
                    <div className="login-password-field">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        placeholder="Enter your password"
                        className="login-input"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="login-eye-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                  </div>

                  <div className="login-form-options">
                    <label className="login-checkbox-option">
                      <input 
                        type="checkbox" 
                        className="login-checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disabled={isLoading}
                      />
                      Remember me
                    </label>
                    <button 
                      type="button" 
                      className="login-forgot-btn"
                      onClick={handleForgotPassword}
                      disabled={isLoading}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button 
                    type="submit" 
                    className="login-submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Login to Account'}
                  </button>

                  <div className="login-social-section">
                    <p className="login-social-text">Or continue with</p>
                    <div className="login-social-buttons">
                      <button 
                        type="button" 
                        className="login-social-btn login-social-google"
                        disabled={isLoading}
                      >
                        Google
                      </button>
                      <button 
                        type="button" 
                        className="login-social-btn login-social-facebook"
                        disabled={isLoading}
                      >
                        Facebook
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <form className="login-form" onSubmit={handleRegisterSubmit}>
                  <div className="login-form-group">
                    <label className="login-label">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={registerData.fullName}
                      onChange={handleRegisterChange}
                      required
                      placeholder="Enter your full name"
                      className="login-input"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="login-form-row">
                    <div className="login-form-group">
                      <label className="login-label">Gender</label>
                      <select
                        name="gender"
                        value={registerData.gender}
                        onChange={handleRegisterChange}
                        required
                        className="login-select"
                        disabled={isLoading}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="login-form-group">
                      <label className="login-label">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={registerData.dob}
                        onChange={handleRegisterChange}
                        required
                        className="login-input"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="login-form-group">
                    <label className="login-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      required
                      placeholder="your@gmail.com"
                      className="login-input"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="login-form-group">
                    <label className="login-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      required
                      placeholder="9800000000"
                      className="login-input"
                      disabled={isLoading}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>

                  <div className="login-form-group">
                    <label className="login-label">Create Password</label>
                    <div className="login-password-field">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                        placeholder="Create strong password (min. 6 characters)"
                        className="login-input"
                        disabled={isLoading}
                        minLength="6"
                      />
                      <button
                        type="button"
                        className="login-eye-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                  </div>

                  <div className="login-form-group">
                    <label className="login-label">Confirm Password</label>
                    <div className="login-password-field">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        required
                        placeholder="Re-enter password"
                        className="login-input"
                        disabled={isLoading}
                        minLength="6"
                      />
                      <button
                        type="button"
                        className="login-eye-btn"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                  </div>

                  <div className="login-form-group">
                    <label className="login-checkbox-option login-terms-checkbox">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={registerData.acceptTerms}
                        onChange={handleRegisterChange}
                        required
                        className="login-checkbox"
                        disabled={isLoading}
                      />
                      I agree to the Terms & Conditions and Privacy Policy
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="login-submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Student Account'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;