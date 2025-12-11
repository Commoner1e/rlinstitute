import React from 'react';
import './course.css';
import Nav from './components/Nav';

const Course = () => {
  const courseFeatures = [
    {
      icon: "🔬",
      title: "Practical Training",
      description: "Hands-on training with modern laboratory equipment and real-world scenarios in our fully-equipped labs.",
      details: [
        "Modern laboratory equipment",
        "Real-world case studies",
        "Practical demonstrations",
        "Skill development sessions"
      ]
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      description: "Learn from experienced professionals with years of industry experience and teaching expertise.",
      details: [
        "Qualified instructors",
        "Industry veterans",
        "Research-oriented approach",
        "Individual mentorship"
      ]
    },
    {
      icon: "📜",
      title: "CTEVT Certification",
      description: "Earn a nationally recognized certificate upon successful completion that opens doors to numerous opportunities.",
      details: [
        "Government-recognized",
        "Nationally valid",
        "Industry acceptance",
        "Career advancement"
      ]
    }
  ];

  const curriculum = [
    {
      year: "First Year",
      subjects: ["Basic Science", "Human Anatomy", "Physiology", "Basic Lab Techniques", "English & Communication", "Computer Basics"],
      duration: "12 Months",
      color: "#2196F3"
    },
    {
      year: "Second Year",
      subjects: ["Clinical Pathology", "Hematology", "Microbiology", "Biochemistry", "Parasitology", "Immunology"],
      duration: "12 Months",
      color: "#4CAF50"
    },
    {
      year: "Third Year",
      subjects: ["Advanced Lab Techniques", "Hospital Internship", "Project Work", "Quality Control", "Lab Management", "Research Methodology"],
      duration: "12 Months",
      color: "#FF9800"
    }
  ];

  const admissionRequirements = [
    "SEE/SLC passed with minimum 1.8 GPA",
    "Science background preferred",
    "Completed 16 years of age",
    "Medical fitness certificate",
    "Character certificate from school",
    "Passport size photographs"
  ];

  return (
    <div className="course-container">
      <Nav />
      
      {/* Hero Section */}
      <div className="course-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="course-title">Medical Lab Technician Course</h1>
            <p className="course-subtitle">TSLC - 3 Years Program | CTEVT Affiliated</p>
            <p className="course-description">
              Comprehensive training program designed to produce skilled laboratory professionals 
              equipped with theoretical knowledge and practical expertise.
            </p>
            <button className="enquiry-btn">Request Course Details</button>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <section className="highlights-section">
        <div className="section-header">
          <h2>Course Highlights</h2>
          <p>Why Choose Our MLT Program</p>
        </div>
        
        <div className="features-grid">
          {courseFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <ul className="feature-list">
                {feature.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section">
        <div className="section-header">
          <h2>Course Curriculum</h2>
          <p>3-Year Comprehensive Training Program</p>
        </div>

        <div className="curriculum-timeline">
          {curriculum.map((year, index) => (
            <div className="year-card" key={index} style={{ borderLeftColor: year.color }}>
              <div className="year-header" style={{ background: year.color }}>
                <h3>{year.year}</h3>
                <span className="duration">{year.duration}</span>
              </div>
              
              <div className="year-content">
                <h4>Subjects Covered:</h4>
                <div className="subjects-list">
                  {year.subjects.map((subject, idx) => (
                    <span className="subject-tag" key={idx} style={{ background: `${year.color}20` }}>
                      {subject}
                    </span>
                  ))}
                </div>
                
                <div className="learning-outcomes">
                  <h5>Learning Outcomes:</h5>
                  <ul>
                    {index === 0 && [
                      "Understand basic scientific principles",
                      "Learn human anatomy and physiology",
                      "Master fundamental lab techniques",
                      "Develop communication skills"
                    ].map((item, idx) => <li key={idx}>{item}</li>)}
                    
                    {index === 1 && [
                      "Perform clinical pathology tests",
                      "Handle microbiology samples",
                      "Analyze biochemical parameters",
                      "Understand hematology principles"
                    ].map((item, idx) => <li key={idx}>{item}</li>)}
                    
                    {index === 2 && [
                      "Gain hospital internship experience",
                      "Develop research skills",
                      "Learn advanced techniques",
                      "Understand lab management"
                    ].map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Table */}
        <div className="curriculum-table-container">
          <h3>Detailed Curriculum Overview</h3>
          <div className="curriculum-table">
            <div className="table-header">
              <div className="table-cell">Year</div>
              <div className="table-cell">Subjects</div>
              <div className="table-cell">Duration</div>
            </div>
            
            {curriculum.map((year, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell year-cell">{year.year}</div>
                <div className="table-cell subjects-cell">
                  <div className="subject-chips">
                    {year.subjects.map((subject, idx) => (
                      <span key={idx} className="subject-chip">{subject}</span>
                    ))}
                  </div>
                </div>
                <div className="table-cell duration-cell">{year.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="admission-section">
        <div className="admission-container">
          <div className="admission-info">
            <h2>Admission Requirements</h2>
            <p>Eligibility criteria for enrolling in the MLT program</p>
            
            <div className="requirements-list">
              {admissionRequirements.map((req, index) => (
                <div className="requirement-item" key={index}>
                  <div className="req-number">{index + 1}</div>
                  <span>{req}</span>
                </div>
              ))}
            </div>
            
            <div className="additional-info">
              <h4>Additional Information:</h4>
              <ul>
                <li>Admission opens twice a year (Spring & Fall)</li>
                <li>Limited seats available - Apply early</li>
                <li>Scholarships available for deserving students</li>
                <li>Hostel facility available for outstation students</li>
              </ul>
            </div>
          </div>
          
          <div className="admission-card">
            <div className="card-header">
              <h3>Course Details at a Glance</h3>
            </div>
            <div className="card-content">
              <div className="detail-item">
                <span className="detail-label">Course Duration:</span>
                <span className="detail-value">3 Years (6 Semesters)</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Affiliation:</span>
                <span className="detail-value">CTEVT, Government of Nepal</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Qualification:</span>
                <span className="detail-value">TSLC in Medical Lab Technology</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Class Timing:</span>
                <span className="detail-value">6:00 AM - 1:00 PM</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Internship:</span>
                <span className="detail-value">6 Months Hospital Training</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Medium:</span>
                <span className="detail-value">English & Nepali</span>
              </div>
              
              <div className="admission-notice">
                <h4>📢 Next Batch Starting Soon!</h4>
                <p>Limited seats available. Apply before deadline.</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="career-section">
        <div className="section-header">
          <h2>Career Opportunities</h2>
          <p>Where Our Graduates Work</p>
        </div>
        
        <div className="career-grid">
          <div className="career-card">
            <div className="career-icon">🏥</div>
            <h3>Hospitals</h3>
            <p>Government & Private Hospitals</p>
          </div>
          
          <div className="career-card">
            <div className="career-icon">🔬</div>
            <h3>Diagnostic Labs</h3>
            <p>Pathology & Diagnostic Centers</p>
          </div>
          
          <div className="career-card">
            <div className="career-icon">💉</div>
            <h3>Blood Banks</h3>
            <p>Blood Collection & Testing Centers</p>
          </div>
          
          <div className="career-card">
            <div className="career-icon">💊</div>
            <h3>Pharmaceuticals</h3>
            <p>Quality Control & Research Labs</p>
          </div>
          
          <div className="career-card">
            <div className="career-icon">🏛️</div>
            <h3>Public Health</h3>
            <p>Government Health Departments</p>
          </div>
          
          <div className="career-card">
            <div className="career-icon">🎓</div>
            <h3>Teaching</h3>
            <p>Academic Institutions</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="course-footer">
        <div className="footer-content">
          <div className="contact-info">
            <h4>For More Information:</h4>
            <p>📞 +977-XX-XXXXXXX | ✉️ admissions@rltechnical.edu.np</p>
            <p>📍 Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
          </div>
          
          <div className="footer-note">
            <p>"Quality Education for Quality Healthcare Professionals"</p>
            <button className="download-brochure">📥 Download Course Brochure</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Course;