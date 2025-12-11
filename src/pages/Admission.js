import React, { useState } from 'react';
import './admission.css';
import Nav from './components/Nav';

const Admission = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    gpa: '',
    dob: ''
  });

  const admissionSteps = [
    {
      step: 1,
      title: "Online Registration",
      description: "Fill the online registration form with your personal and academic details.",
      details: [
        "Complete the application form",
        "Provide accurate information",
        "Review before submission",
        "Receive confirmation email"
      ],
      icon: "📝",
      color: "#2196F3"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload required documents for verification and processing.",
      details: [
        "SEE/SLC mark sheet",
        "Character certificate",
        "Citizenship certificate copy",
        "Passport size photos (4 copies)",
        "Medical fitness certificate"
      ],
      icon: "📄",
      color: "#4CAF50"
    },
    {
      step: 3,
      title: "Admin Approval",
      description: "Wait for admin review and approval of your application.",
      details: [
        "Document verification",
        "Eligibility check",
        "Interview (if required)",
        "Final approval",
        "Fee structure communication"
      ],
      icon: "✅",
      color: "#FF9800"
    },
    {
      step: 4,
      title: "Start Learning",
      description: "Access student portal and begin your educational journey.",
      details: [
        "Fee payment",
        "Student ID generation",
        "Portal access credentials",
        "Orientation program",
        "Class schedule"
      ],
      icon: "🎓",
      color: "#9C27B0"
    }
  ];

  const eligibilityCriteria = [
    {
      title: "Academic Qualification",
      requirements: [
        "Passed SEE or equivalent examination",
        "Minimum GPA: 1.6",
        "Science and Mathematics background preferred",
        "English proficiency required"
      ],
      icon: "📚"
    },
    {
      title: "Personal Requirements",
      requirements: [
        "Completed 16 years of age",
        "Good health condition",
        "No criminal record",
        "Valid citizenship certificate"
      ],
      icon: "👤"
    },
    {
      title: "Documentation",
      requirements: [
        "SEE/SLC mark sheet (original + 2 copies)",
        "Character certificate from school",
        "Citizenship certificate (copy)",
        "Passport size photos (4 copies)",
        "Medical fitness certificate"
      ],
      icon: "📋"
    }
  ];

  const importantDates = [
    { event: "Application Opens", date: "March 1, 2024" },
    { event: "Early Bird Deadline", date: "April 15, 2024" },
    { event: "Regular Deadline", date: "May 31, 2024" },
    { event: "Interview Dates", date: "June 10-15, 2024" },
    { event: "Classes Begin", date: "July 15, 2024" }
  ];

  const feeStructure = [
    { item: "Admission Fee", amount: "Rs. 5,000" },
    { item: "Tuition Fee (Per Semester)", amount: "Rs. 25,000" },
    { item: "Lab Fee", amount: "Rs. 3,000" },
    { item: "Library Fee", amount: "Rs. 1,500" },
    { item: "Exam Fee", amount: "Rs. 2,000" },
    { item: "Total (Approx. Per Year)", amount: "Rs. 60,000" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! Your application has been submitted successfully. We'll contact you at ${formData.email}.`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      gpa: '',
      dob: ''
    });
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <><Nav />
    <div className="admit-page">
      
      
      {/* Hero Banner */}
      <div className="admit-hero-banner">
        <div className="admit-hero-content">
          <div className="admit-hero-text">
            <h1 className="admit-main-title">Admission Open for 2024 Batch</h1>
            <p className="admit-sub-title">TSLC in Medical Lab Technician (3 Years) | CTEVT Affiliated</p>
            <p className="admit-hero-desc">
              Start your journey to become a certified Medical Lab Technician. Limited seats available for the upcoming batch.
            </p>
            <div className="admit-hero-buttons">
              <button className="admit-btn-primary">Apply Now</button>
              <button className="admit-btn-secondary">Download Prospectus</button>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <section className="admit-process-section">
        <div className="admit-section-head">
          <h2 className="admit-section-title">Admission Process</h2>
          <p className="admit-section-sub">Simple 4-Step Process to Join Our Institute</p>
        </div>

        <div className="admit-steps-container">
          {admissionSteps.map((step, index) => (
            <div 
              className={`admit-step-card ${index === activeStep ? 'admit-step-active' : ''}`} 
              key={step.step}
              onClick={() => handleStepClick(index)}
            >
              <div className="admit-step-number" style={{ backgroundColor: step.color }}>
                {step.step}
              </div>
              <div className="admit-step-content">
                <div className="admit-step-header">
                  <div className="admit-step-icon">{step.icon}</div>
                  <h3 className="admit-step-title">{step.title}</h3>
                </div>
                <p className="admit-step-desc">{step.description}</p>
                <div className="admit-step-details">
                  <h4>What you need to do:</h4>
                  <ul className="admit-details-list">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="admit-eligibility-section">
        <div className="admit-section-head">
          <h2 className="admit-section-title">Eligibility Criteria</h2>
          <p className="admit-section-sub">Requirements for Admission to MLT Program</p>
        </div>

        <div className="admit-criteria-grid">
          {eligibilityCriteria.map((criteria, index) => (
            <div className="admit-criteria-card" key={index}>
              <div className="admit-criteria-icon">{criteria.icon}</div>
              <h3 className="admit-criteria-title">{criteria.title}</h3>
              <ul className="admit-requirements">
                {criteria.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="admit-gpa-box">
          <div className="admit-gpa-card">
            <div className="admit-gpa-icon">⭐</div>
            <div className="admit-gpa-content">
              <h3 className="admit-gpa-title">Minimum GPA Requirement</h3>
              <div className="admit-gpa-display">
                <span className="admit-gpa-value">1.6</span>
                <span className="admit-gpa-label">Minimum GPA in SEE/SLC</span>
              </div>
              <p className="admit-gpa-note">Note: Students with Science and Mathematics background will be given preference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="admit-form-section">
        <div className="admit-form-container">
          <div className="admit-form-wrapper">
            <div className="admit-form-header">
              <h2 className="admit-form-title">Online Application Form</h2>
              <p className="admit-form-sub">Fill out the form to start your admission process</p>
            </div>
            
            <form className="admit-application-form" onSubmit={handleSubmit}>
              <div className="admit-form-row">
                <div className="admit-form-group">
                  <label htmlFor="admitFirstName">First Name *</label>
                  <input
                    type="text"
                    id="admitFirstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                    className="admit-form-input"
                  />
                </div>
                
                <div className="admit-form-group">
                  <label htmlFor="admitLastName">Last Name *</label>
                  <input
                    type="text"
                    id="admitLastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                    className="admit-form-input"
                  />
                </div>
              </div>
              
              <div className="admit-form-row">
                <div className="admit-form-group">
                  <label htmlFor="admitEmail">Email Address *</label>
                  <input
                    type="email"
                    id="admitEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="admit-form-input"
                  />
                </div>
                
                <div className="admit-form-group">
                  <label htmlFor="admitPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="admitPhone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="98XXXXXXXX"
                    className="admit-form-input"
                  />
                </div>
              </div>
              
              <div className="admit-form-group">
                <label htmlFor="admitAddress">Address *</label>
                <input
                  type="text"
                  id="admitAddress"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your complete address"
                  className="admit-form-input"
                />
              </div>
              
              <div className="admit-form-row">
                <div className="admit-form-group">
                  <label htmlFor="admitEducation">Highest Education *</label>
                  <select
                    id="admitEducation"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="admit-form-select"
                  >
                    <option value="">Select your education</option>
                    <option value="see">SEE/SLC</option>
                    <option value="plus2">+2 (Science)</option>
                    <option value="plus2-other">+2 (Other)</option>
                    <option value="bachelor">Bachelor's Degree</option>
                  </select>
                </div>
                
                <div className="admit-form-group">
                  <label htmlFor="admitGpa">GPA/Percentage *</label>
                  <input
                    type="text"
                    id="admitGpa"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your GPA or %"
                    className="admit-form-input"
                  />
                </div>
              </div>
              
              <div className="admit-form-group">
                <label htmlFor="admitDob">Date of Birth *</label>
                <input
                  type="date"
                  id="admitDob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                  className="admit-form-input"
                />
              </div>
              
              <div className="admit-form-check">
                <input type="checkbox" id="admitAgree" required className="admit-checkbox" />
                <label htmlFor="admitAgree" className="admit-check-label">
                  I agree to the terms and conditions and confirm that all information provided is accurate.
                </label>
              </div>
              
              <button type="submit" className="admit-submit-btn">
                Submit Application
              </button>
            </form>
          </div>
          
          <div className="admit-side-panel">
            <div className="admit-dates-panel">
              <h3 className="admit-panel-title">Important Dates</h3>
              <div className="admit-dates-list">
                {importantDates.map((item, index) => (
                  <div className="admit-date-item" key={index}>
                    <div className="admit-date-event">{item.event}</div>
                    <div className="admit-date-value">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="admit-fees-panel">
              <h3 className="admit-panel-title">Fee Structure (Approximate)</h3>
              <div className="admit-fees-list">
                {feeStructure.map((fee, index) => (
                  <div className={`admit-fee-item ${index === feeStructure.length - 1 ? 'admit-fee-total' : ''}`} key={index}>
                    <span className="admit-fee-name">{fee.item}</span>
                    <span className="admit-fee-amount">{fee.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="admit-docs-section">
        <div className="admit-section-head">
          <h2 className="admit-section-title">Required Documents</h2>
          <p className="admit-section-sub">Prepare these documents for admission process</p>
        </div>
        
        <div className="admit-docs-grid">
          <div className="admit-doc-card">
            <div className="admit-doc-icon">📋</div>
            <h3 className="admit-doc-title">Academic Documents</h3>
            <ul className="admit-doc-list">
              <li>SEE/SLC Mark Sheet (Original + 2 copies)</li>
              <li>Character Certificate from School</li>
              <li>Transfer Certificate</li>
            </ul>
          </div>
          
          <div className="admit-doc-card">
            <div className="admit-doc-icon">🆔</div>
            <h3 className="admit-doc-title">Identity Documents</h3>
            <ul className="admit-doc-list">
              <li>Citizenship Certificate (Copy)</li>
              <li>Birth Certificate (Copy)</li>
              <li>Passport Size Photos (4 copies)</li>
            </ul>
          </div>
          
          <div className="admit-doc-card">
            <div className="admit-doc-icon">🏥</div>
            <h3 className="admit-doc-title">Medical Documents</h3>
            <ul className="admit-doc-list">
              <li>Medical Fitness Certificate</li>
              <li>Blood Group Report</li>
              <li>COVID-19 Vaccination Certificate</li>
            </ul>
          </div>
          
          <div className="admit-doc-card">
            <div className="admit-doc-icon">📝</div>
            <h3 className="admit-doc-title">Other Documents</h3>
            <ul className="admit-doc-list">
              <li>Application Form (Filled)</li>
              <li>Guardian's Citizenship (Copy)</li>
              <li>Income Certificate (For Scholarship)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="admit-faq-section">
        <div className="admit-section-head">
          <h2 className="admit-section-title">Frequently Asked Questions</h2>
          <p className="admit-section-sub">Get answers to common admission queries</p>
        </div>
        
        <div className="admit-faq-container">
          <div className="admit-faq-item">
            <div className="admit-faq-question">
              <h3>What is the duration of the MLT program?</h3>
              <span className="admit-faq-toggle">+</span>
            </div>
            <div className="admit-faq-answer">
              <p>The Medical Lab Technician program is a 3-year (6 semesters) TSLC course affiliated with CTEVT.</p>
            </div>
          </div>
          
          <div className="admit-faq-item">
            <div className="admit-faq-question">
              <h3>Is there an entrance exam for admission?</h3>
              <span className="admit-faq-toggle">+</span>
            </div>
            <div className="admit-faq-answer">
              <p>No entrance exam is required. Admission is based on academic merit and document verification.</p>
            </div>
          </div>
          
          <div className="admit-faq-item">
            <div className="admit-faq-question">
              <h3>When does the new batch start?</h3>
              <span className="admit-faq-toggle">+</span>
            </div>
            <div className="admit-faq-answer">
              <p>New batches start twice a year - in July (Main batch) and January (Supplementary batch).</p>
            </div>
          </div>
          
          <div className="admit-faq-item">
            <div className="admit-faq-question">
              <h3>Is hostel facility available?</h3>
              <span className="admit-faq-toggle">+</span>
            </div>
            <div className="admit-faq-answer">
              <p>Yes, we provide separate hostel facilities for male and female students with mess facilities.</p>
            </div>
          </div>
          
          <div className="admit-faq-item">
            <div className="admit-faq-question">
              <h3>What is the placement record?</h3>
              <span className="admit-faq-toggle">+</span>
            </div>
            <div className="admit-faq-answer">
              <p>We have a 95% placement rate with our graduates working in hospitals, labs, and diagnostic centers across Nepal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="admit-contact-section">
        <div className="admit-contact-wrapper">
          <div className="admit-contact-info">
            <h2 className="admit-contact-title">Need Help with Admission?</h2>
            <p className="admit-contact-sub">Our admission team is here to assist you</p>
            
            <div className="admit-contact-details">
              <div className="admit-contact-item">
                <div className="admit-contact-icon">📞</div>
                <div className="admit-contact-text">
                  <h4>Admission Office</h4>
                  <p>+977-XX-XXXXXXX</p>
                </div>
              </div>
              
              <div className="admit-contact-item">
                <div className="admit-contact-icon">✉️</div>
                <div className="admit-contact-text">
                  <h4>Email Address</h4>
                  <p>admissions@rltechnical.edu.np</p>
                </div>
              </div>
              
              <div className="admit-contact-item">
                <div className="admit-contact-icon">📍</div>
                <div className="admit-contact-text">
                  <h4>Visit Campus</h4>
                  <p>Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
                </div>
              </div>
              
              <div className="admit-contact-item">
                <div className="admit-contact-icon">⏰</div>
                <div className="admit-contact-text">
                  <h4>Office Hours</h4>
                  <p>Sunday-Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="admit-quick-actions">
            <h3 className="admit-actions-title">Quick Actions</h3>
            <button className="admit-action-btn">📥 Download Application Form</button>
            <button className="admit-action-btn">📋 View Full Prospectus</button>
            <button className="admit-action-btn">🎓 Check Eligibility</button>
            <button className="admit-action-btn">💬 Chat with Counselor</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="admit-footer">
        <div className="admit-footer-content">
          <div className="admit-notice-box">
            <h3 className="admit-notice-title">⚠️ Important Notice</h3>
            <p className="admit-notice-text">Beware of fraudulent agents. All admission processes should be completed through official channels only.</p>
          </div>
          
          <div className="admit-footer-info">
            <p className="admit-institute-name">R-L Technical Institute | CTEVT Affiliated | Est. 2010</p>
            <p className="admit-footer-contact">© 2024 All rights reserved | Admission Office: +977-XX-XXXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Admission;