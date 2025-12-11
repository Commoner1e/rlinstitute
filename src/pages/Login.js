import React, { useState } from 'react';
import './login.css';
import Nav from './components/Nav';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
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
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!registerData.acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    alert(`Registration successful!\nWelcome ${registerData.fullName}!`);
    
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
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back!`);
    setLoginData({ email: '', password: '' });
  };

  return (
    <div className="login-page">
      <Nav />
      
      <div className="login-wrapper">
        {/* Left Column - Welcome/Info */}
        <div className="login-left">
          <div className="login-info">
            <h1 className="welcome-title">Welcome to R-L Technical Institute</h1>
            <p className="welcome-text">
              Join Nepal's premier Medical Lab Technician training institute. 
              Access your student portal, track progress, and manage your academic journey.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <div className="feature-content">
                  <h3>Student Portal</h3>
                  <p>Access grades, assignments, and study materials</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📅</div>
                <div className="feature-content">
                  <h3>Class Schedule</h3>
                  <p>View timetable and important dates</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <div className="feature-content">
                  <h3>Online Resources</h3>
                  <p>Digital library and learning materials</p>
                </div>
              </div>
            </div>
            
            <div className="institute-info">
              <h3>Need Help?</h3>
              <p>Contact: +977-XX-XXXXXXX</p>
              <p>Email: support@rlinstitute.edu.np</p>
            </div>
          </div>
        </div>

        {/* Middle Column - Login/Register Form */}
        <div className="login-middle">
          <div className="login-card">
            <div className="login-header">
              <h2>{isLoginMode ? 'Student Login' : 'Create Student Account'}</h2>
              <p>{isLoginMode ? 'Sign in to continue' : 'Register to get started'}</p>
              
              <div className="mode-tabs">
                <button 
                  className={`tab-btn ${isLoginMode ? 'active' : ''}`}
                  onClick={() => setIsLoginMode(true)}
                >
                  Login
                </button>
                <button 
                  className={`tab-btn ${!isLoginMode ? 'active' : ''}`}
                  onClick={() => setIsLoginMode(false)}
                >
                  Register
                </button>
              </div>
            </div>

            {isLoginMode ? (
              <form className="login-form" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label>Gmail Address</label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    placeholder="student@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="password-field">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="eye-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <button type="button" className="forgot-btn">
                    Forgot Password?
                  </button>
                </div>

                <button type="submit" className="submit-btn login-submit">
                  Login to Account
                </button>

                <div className="social-login">
                  <p>Or continue with</p>
                  <div className="social-buttons">
                    <button type="button" className="social-btn google">
                      Google
                    </button>
                    <button type="button" className="social-btn facebook">
                      Facebook
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form className="login-form" onSubmit={handleRegisterSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={registerData.fullName}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={registerData.gender}
                      onChange={handleRegisterChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={registerData.dob}
                      onChange={handleRegisterChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Gmail Address</label>
                  <input
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                    placeholder="your@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleRegisterChange}
                    required
                    placeholder="9800000000"
                  />
                </div>

                <div className="form-group">
                  <label>Create Password</label>
                  <div className="password-field">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      required
                      placeholder="Create strong password"
                    />
                    <button
                      type="button"
                      className="eye-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="password-field">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                      placeholder="Re-enter password"
                    />
                    <button
                      type="button"
                      className="eye-btn"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkbox-option terms">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={registerData.acceptTerms}
                      onChange={handleRegisterChange}
                      required
                    />
                    I agree to the Terms & Conditions and Privacy Policy
                  </label>
                </div>

                <button type="submit" className="submit-btn register-submit">
                  Create Student Account
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column - Announcements/Info */}
        <div className="login-right">
          <div className="announcements">
            <h3>📢 Announcements</h3>
            <div className="announcement-item">
              <h4>New Batch Starting Soon</h4>
              <p>MLT 2025 batch registration open</p>
              <span className="date">Jan 15, 2025</span>
            </div>
            
            <div className="announcement-item">
              <h4>Scholarship Applications</h4>
              <p>Apply for merit-based scholarships</p>
              <span className="date">Dec 20, 2024</span>
            </div>
            
            <div className="announcement-item">
              <h4>Lab Facility Upgrade</h4>
              <p>New equipment installed in microbiology lab</p>
              <span className="date">Nov 10, 2024</span>
            </div>
          </div>

          <div className="quick-links">
            <h3>🔗 Quick Links</h3>
            <a href="/admission" className="quick-link">Admission Process</a>
            <a href="/course" className="quick-link">Course Details</a>
            <a href="/faculty" className="quick-link">Faculty Information</a>
            <a href="/contact" className="quick-link">Contact Us</a>
          </div>

          <div className="contact-card">
            <h3>📞 Contact Support</h3>
            <p><strong>Admission Office:</strong> +977-XX-XXXXXXX</p>
            <p><strong>Academic Office:</strong> +977-XX-XXXXXXX</p>
            <p><strong>Email:</strong> info@rlinstitute.edu.np</p>
            <p><strong>Hours:</strong> Sun-Fri, 9AM-5PM</p>
          </div>
        </div>
      </div>

      <footer className="login-footer">
        <div className="footer-content">
          <p className="copyright">Copyright © 2025 - Manjil Timsina</p>
          <p className="designer">Design by Manjil Timsina | Contact: its.timsina@gmail.com</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/help">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;