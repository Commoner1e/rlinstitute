import './home.css';
import Nav from './components/Nav';

const Home = () => {
  const handleApplyNow = () => {
    alert('Apply Now clicked! Redirecting to application form...');
  };

  const handleCourseDetails = () => {
    alert('Course Details clicked! Redirecting to course information...');
  };

  const handleStartApplication = (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!firstName || !lastName || !email || !phone) {
      alert('Please fill all the fields');
      return;
    }
    
    alert(`Thank you ${firstName} ${lastName}! Your application has started. We'll contact you at ${email} or ${phone}.`);
    
    document.getElementById('registrationForm').reset();
  };

  return (
    <div className="home-container">
      <Nav />
      
      <div className="hero-section">
        <div className="content-wrapper">
          {/* Main Content Card */}
          <div className="main-content-card">
            <h1 className="institute-title">Medical Lab Technician Training Institute</h1>
            <p className="institute-affiliation">Affiliated with CTEVT, Government of Nepal</p>
            
            <div className="location-info">
              <span className="location-icon">📍</span>
              <p className="location-text">Located at Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
            </div>
            
            <div className="action-buttons">
              <button className="primary-btn" onClick={handleApplyNow}>Apply Now</button>
              <button className="secondary-btn" onClick={handleCourseDetails}>Course Details</button>
            </div>
          </div>
          
          {/* Registration Form Card */}
          <div className="registration-card">
            <h2 className="form-title">Quick Registration</h2>
            <form id="registrationForm" className="registration-form">
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName" 
                    placeholder="First Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName" 
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Email Address"
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  placeholder="Phone Number"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn" 
                onClick={handleStartApplication}
              >
                Start Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;