import './about.css';
import Nav from './components/Nav';

const About = () => {
  return (
    <div className="about-container">
      <Nav />
      
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About R-L Technical Institute</h1>
          <p className="about-subtitle">Excellence in Medical Laboratory Education</p>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <div className="intro-text">
            <h2>Shaping Future Medical Laboratory Professionals</h2>
            <p>
              R-L Technical Institute is a premier technical education center in Jhapa, Nepal, dedicated to providing 
              high-quality vocational training in the medical field. We are proud to offer a comprehensive 3-year TSLC 
              (Technical School Leaving Certificate) program in Medical Lab Technician, which is officially affiliated 
              with the Council for Technical Education and Vocational Training (CTEVT).
            </p>
            <p>
              Our institute was established with a vision to bridge the gap between theoretical knowledge and practical 
              skills in the medical laboratory sector. We believe in creating competent professionals who can contribute 
              significantly to the healthcare system of Nepal and beyond.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="/public/about-main.jpg" 
              alt="R-L Technical Institute Campus" 
              className="institute-image"
            />
            <div className="image-overlay">
              <p>State-of-the-art Campus Facility</p>
            </div>
          </div>
        </div>
        
        <div className="mission-vision">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide industry-relevant technical education and practical training that empowers students with 
              the skills and knowledge required to excel as professional Medical Lab Technicians.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To become the leading technical institute in Eastern Nepal, recognized for producing highly skilled 
              medical laboratory professionals who meet international standards.
            </p>
          </div>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Why Choose R-L Technical Institute?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image">
                <img src="/public/ctevt-badge.jpg" alt="CTEVT Affiliated" />
                <div className="feature-badge">Official</div>
              </div>
              <div className="feature-content">
                <h3>CTEVT Affiliated</h3>
                <p>
                  Recognized and affiliated with the Council for Technical Education and Vocational Training, 
                  Government of Nepal. Our curriculum meets national standards and our certification is widely 
                  accepted across Nepal.
                </p>
                <ul className="feature-list">
                  <li>✅ Nationally recognized certification</li>
                  <li>✅ Government-approved curriculum</li>
                  <li>✅ Quality assured education</li>
                  <li>✅ Industry-standard training</li>
                </ul>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-image">
                <img src="/public/lab-facilities.jpg" alt="Modern Laboratory Facilities" />
                <div className="feature-badge">Modern</div>
              </div>
              <div className="feature-content">
                <h3>Modern Facilities</h3>
                <p>
                  Equipped with state-of-the-art laboratory instruments and learning resources. Our facilities 
                  are regularly updated to keep pace with technological advancements in medical laboratory science.
                </p>
                <ul className="feature-list">
                  <li>✅ Advanced laboratory equipment</li>
                  <li>✅ Modern classroom technology</li>
                  <li>✅ Digital learning resources</li>
                  <li>✅ Safe and clean environment</li>
                </ul>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-image">
                <img src="/public/faculty-team.jpg" alt="Experienced Faculty" />
                <div className="feature-badge">Expert</div>
              </div>
              <div className="feature-content">
                <h3>Experienced Faculty</h3>
                <p>
                  Learn from highly qualified and experienced teaching professionals who are dedicated to 
                  student success. Our faculty members combine academic excellence with practical industry 
                  experience.
                </p>
                <ul className="feature-list">
                  <li>✅ Qualified instructors</li>
                  <li>✅ Industry experience</li>
                  <li>✅ Individual attention</li>
                  <li>✅ Mentorship programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="program-details">
          <div className="program-header">
            <h2>3-Year TSLC Program in Medical Lab Technician</h2>
            <p>Comprehensive Training for Healthcare Excellence</p>
          </div>
          
          <div className="program-content">
            <div className="program-image">
              <img src="/public/program-details.jpg" alt="MLT Program" />
            </div>
            
            <div className="program-info">
              <h3>Course Highlights</h3>
              <div className="program-features">
                <div className="program-item">
                  <div className="item-icon">📅</div>
                  <div className="item-text">
                    <strong>Duration:</strong> 3 Years (6 Semesters)
                  </div>
                </div>
                
                <div className="program-item">
                  <div className="item-icon">🎓</div>
                  <div className="item-text">
                    <strong>Qualification:</strong> TSLC Certificate
                  </div>
                </div>
                
                <div className="program-item">
                  <div className="item-icon">🏥</div>
                  <div className="item-text">
                    <strong>Internship:</strong> Hospital-based practical training
                  </div>
                </div>
                
                <div className="program-item">
                  <div className="item-icon">📚</div>
                  <div className="item-text">
                    <strong>Curriculum:</strong> Theory + Practical + Clinical
                  </div>
                </div>
              </div>
              
              <div className="career-opportunities">
                <h4>Career Opportunities</h4>
                <p>
                  Graduates can work in hospitals, diagnostic centers, research laboratories, 
                  blood banks, pharmaceutical companies, and public health organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="institute-stats">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Graduates</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Expert Faculty</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Placement Rate</div>
          </div>
        </div>
      </div>
      
      <footer className="about-footer">
        <p>R-L Technical Institute • Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
        <p>📞 +977-XX-XXXXXXX • ✉️ info@rltechnical.edu.np</p>
      </footer>
    </div>
  );
};

export default About;