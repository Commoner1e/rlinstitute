import React from 'react';
import './faculty.css';
import Nav from './components/Nav';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. John Smith",
      designation: "Principal & Senior Lecturer",
      specialization: "Medical Laboratory Science",
      experience: "15+ years experience in medical laboratory science",
      education: "PhD in Medical Laboratory Science, MSc in Clinical Pathology",
      bio: "Dr. Smith has extensive experience in both academic and clinical settings. He has published numerous research papers in international journals and serves as a consultant for several hospitals in Eastern Nepal.",
      expertise: ["Laboratory Management", "Quality Control", "Research Methodology", "Clinical Biochemistry"],
      image: "/public/faculty-dr-john.jpg",
      contact: "john.smith@rltechnical.edu.np",
      icon: "👨‍⚕️"
    },
    {
      id: 2,
      name: "Prof. Sarah Johnson",
      designation: "Head of Department",
      specialization: "Clinical Pathology & Hematology",
      experience: "12+ years in teaching and clinical practice",
      education: "MSc in Clinical Pathology, BSc in Medical Laboratory Technology",
      bio: "Prof. Johnson specializes in hematology and clinical pathology. She has trained hundreds of MLT students and is known for her innovative teaching methods and patient-centered approach.",
      expertise: ["Hematology", "Clinical Pathology", "Blood Banking", "Immunohematology"],
      image: "/public/faculty-sarah.jpg",
      contact: "sarah.johnson@rltechnical.edu.np",
      icon: "👩‍🔬"
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      designation: "Lab Director",
      specialization: "Microbiology & Biochemistry",
      experience: "18+ years in diagnostic laboratory management",
      education: "PhD in Microbiology, MSc in Biochemistry",
      bio: "Dr. Brown is an expert in microbiology and infectious diseases. He has established several diagnostic labs in the region and is a member of the National Laboratory Quality Assurance Committee.",
      expertise: ["Clinical Microbiology", "Biochemistry", "Molecular Diagnostics", "Quality Assurance"],
      image: "/public/faculty-michael.jpg",
      contact: "michael.brown@rltechnical.edu.np",
      icon: "👨‍🔬"
    },
    {
      id: 4,
      name: "Dr. Emily Chen",
      designation: "Associate Professor",
      specialization: "Histopathology & Cytology",
      experience: "10+ years in histopathology and teaching",
      education: "MD in Pathology, PhD in Cellular Biology",
      bio: "Dr. Chen specializes in histopathology and cytological techniques. She has contributed significantly to cancer research and is actively involved in community health awareness programs.",
      expertise: ["Histopathology", "Cytology", "Cancer Diagnostics", "Tissue Processing"],
      image: "/public/faculty-emily.jpg",
      contact: "emily.chen@rltechnical.edu.np",
      icon: "👩‍⚕️"
    },
    {
      id: 5,
      name: "Mr. David Wilson",
      designation: "Senior Lecturer",
      specialization: "Laboratory Techniques & Instrumentation",
      experience: "14+ years in laboratory instrumentation",
      education: "MSc in Biomedical Engineering, BSc in Medical Technology",
      bio: "Mr. Wilson is an expert in laboratory instrumentation and automation. He has trained technicians across Nepal on modern laboratory equipment operation and maintenance.",
      expertise: ["Laboratory Instruments", "Equipment Maintenance", "Automation", "Troubleshooting"],
      image: "/public/faculty-david.jpg",
      contact: "david.wilson@rltechnical.edu.np",
      icon: "🔧"
    },
    {
      id: 6,
      name: "Ms. Priya Sharma",
      designation: "Lecturer",
      specialization: "Parasitology & Immunology",
      experience: "8+ years in teaching and research",
      education: "MSc in Microbiology, MPhil in Immunology",
      bio: "Ms. Sharma focuses on parasitology and immunological techniques. She is passionate about research and has several publications on tropical diseases prevalent in Nepal.",
      expertise: ["Parasitology", "Immunology", "Serology", "Molecular Biology"],
      image: "/public/faculty-priya.jpg",
      contact: "priya.sharma@rltechnical.edu.np",
      icon: "🔬"
    }
  ];

  const achievements = [
    "50+ Research Publications",
    "15+ National Awards",
    "1000+ Students Trained",
    "10+ International Collaborations",
    "5+ Patents Filed",
    "20+ Conference Presentations"
  ];

  const departments = [
    { name: "Clinical Pathology", facultyCount: 4 },
    { name: "Microbiology", facultyCount: 3 },
    { name: "Biochemistry", facultyCount: 3 },
    { name: "Hematology", facultyCount: 2 },
    { name: "Histopathology", facultyCount: 2 },
    { name: "Immunology", facultyCount: 2 }
  ];

  return (
    <div className="faculty-container">
      <Nav />
      
      {/* Hero Section */}
      <div className="faculty-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Our Distinguished Faculty</h1>
            <p className="hero-subtitle">Meet the Experts Shaping Future Medical Laboratory Professionals</p>
            <p className="hero-description">
              Our faculty comprises experienced professionals dedicated to providing quality education 
              and mentorship to aspiring Medical Lab Technicians.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">👨‍🏫</div>
            <div className="stat-content">
              <h3>15+</h3>
              <p>Faculty Members</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h3>250+</h3>
              <p>Years Combined Experience</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div className="stat-content">
              <h3>100%</h3>
              <p>Qualified Faculty</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <h3>50+</h3>
              <p>Research Publications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-grid-section">
        <div className="section-header">
          <h2>Meet Our Faculty Team</h2>
          <p>Experienced Professionals Committed to Excellence</p>
        </div>
        
        <div className="faculty-grid">
          {facultyMembers.map((faculty) => (
            <div className="faculty-card" key={faculty.id}>
              <div className="card-header">
                <div className="faculty-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">{faculty.icon}</span>
                  </div>
                  <div className="faculty-badge">{faculty.designation}</div>
                </div>
                
                <div className="faculty-info">
                  <h3 className="faculty-name">{faculty.name}</h3>
                  <p className="faculty-specialization">{faculty.specialization}</p>
                  <div className="experience-badge">
                    <span className="exp-icon">📅</span>
                    <span>{faculty.experience}</span>
                  </div>
                </div>
              </div>
              
              <div className="card-body">
                <p className="faculty-bio">{faculty.bio}</p>
                
                <div className="education-info">
                  <h4>Education</h4>
                  <p>{faculty.education}</p>
                </div>
                
                <div className="expertise-section">
                  <h4>Areas of Expertise</h4>
                  <div className="expertise-tags">
                    {faculty.expertise.map((skill, index) => (
                      <span className="expertise-tag" key={index}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="contact-info">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-email">{faculty.contact}</span>
                </div>
                <button className="view-profile-btn">View Full Profile</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="section-header">
          <h2>Academic Departments</h2>
          <p>Specialized Divisions of Medical Laboratory Science</p>
        </div>
        
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div className="department-card" key={index}>
              <div className="dept-icon">
                {index === 0 && "🩸"}
                {index === 1 && "🦠"}
                {index === 2 && "🧪"}
                {index === 3 && "💉"}
                {index === 4 && "🔬"}
                {index === 5 && "🛡️"}
              </div>
              <h3>{dept.name}</h3>
              <div className="dept-stats">
                <span className="faculty-count">{dept.facultyCount} Faculty</span>
                <span className="course-count">2-3 Courses</span>
              </div>
              <p className="dept-description">
                Specialized training in {dept.name.toLowerCase()} with hands-on practical sessions and modern equipment.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <div className="achievements-content">
            <h2>Faculty Achievements</h2>
            <p>Our faculty members have made significant contributions to medical laboratory science through research, publications, and innovation.</p>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div className="achievement-item" key={index}>
                  <div className="achievement-icon">
                    {index === 0 && "📄"}
                    {index === 1 && "🏅"}
                    {index === 2 && "👨‍🎓"}
                    {index === 3 && "🤝"}
                    {index === 4 && "💡"}
                    {index === 5 && "🎤"}
                  </div>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="quote-icon">❝</div>
              <h3>Student Testimonials</h3>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The faculty at R-L Technical Institute are not just teachers, but mentors who genuinely care about our success. Their industry experience brings real-world relevance to our learning."
              </p>
              <div className="testimonial-author">
                <strong>Anita Sharma</strong>
                <span>MLT Graduate, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-image">
            <div className="image-overlay-text">
              <h3>Interactive Learning Environment</h3>
            </div>
          </div>
          
          <div className="philosophy-content">
            <h2>Our Teaching Philosophy</h2>
            <p>We believe in a student-centered approach that combines theoretical knowledge with practical application.</p>
            
            <div className="philosophy-points">
              <div className="point-item">
                <div className="point-icon">🎯</div>
                <div className="point-text">
                  <h4>Hands-On Training</h4>
                  <p>Emphasis on practical skills with modern laboratory equipment</p>
                </div>
              </div>
              
              <div className="point-item">
                <div className="point-icon">🤝</div>
                <div className="point-text">
                  <h4>Individual Attention</h4>
                  <p>Small class sizes ensure personalized guidance for each student</p>
                </div>
              </div>
              
              <div className="point-item">
                <div className="point-icon">💡</div>
                <div className="point-text">
                  <h4>Research Integration</h4>
                  <p>Latest research findings incorporated into curriculum</p>
                </div>
              </div>
              
              <div className="point-item">
                <div className="point-icon">🌐</div>
                <div className="point-text">
                  <h4>Industry Connection</h4>
                  <p>Regular workshops with industry professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="faculty-footer">
        <div className="footer-container">
          <div className="footer-content">
            <h3>Join Our Academic Community</h3>
            <p>Interested in joining our faculty team or learning more about our academic programs?</p>
            
            <div className="footer-actions">
              <button className="career-btn">Faculty Career Opportunities</button>
              <button className="contact-btn">Contact Academic Dean</button>
            </div>
          </div>
          
          <div className="footer-info">
            <p><strong>Academic Office:</strong> Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
            <p><strong>Phone:</strong> +977-XX-XXXXXXX | <strong>Email:</strong> academics@rltechnical.edu.np</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Faculty;