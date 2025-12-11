import React, { useState } from 'react';
import './contact.css';
import Nav from './components/Nav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal",
      description: "Visit our campus for admission inquiries and counseling"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+977-XX-XXXXXXX",
      description: "Call us during office hours for immediate assistance"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@rlinstitute.edu.np",
      description: "Send us an email for general inquiries"
    },
    {
      icon: "⏰",
      title: "Office Hours",
      details: "Sunday - Friday: 9:00 AM - 5:00 PM",
      description: "Closed on public holidays and Saturdays"
    }
  ];

  const departments = [
    {
      name: "Admission Office",
      phone: "+977-XX-XXXXXXX",
      email: "admissions@rlinstitute.edu.np"
    },
    {
      name: "Academic Office",
      phone: "+977-XX-XXXXXXX",
      email: "academics@rlinstitute.edu.np"
    },
    {
      name: "Accounts Office",
      phone: "+977-XX-XXXXXXX",
      email: "accounts@rlinstitute.edu.np"
    },
    {
      name: "Principal Office",
      phone: "+977-XX-XXXXXXX",
      email: "principal@rlinstitute.edu.np"
    }
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
    alert(`Thank you ${formData.name}! Your message has been sent successfully. We'll respond to you at ${formData.email}.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <><Nav />
    <div className="contactus-page">
      
      
      {/* Hero Section */}
      <div className="contactus-hero">
        <div className="contactus-hero-overlay">
          <div className="contactus-hero-content">
            <h1 className="contactus-title">Contact Us</h1>
            <p className="contactus-subtitle">Get in Touch with R-L Technical Institute</p>
            <p className="contactus-description">
              We're here to help you with any questions about our programs, admission process, or campus facilities.
              Reach out to us through any of the following channels.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <section className="contactus-info-section">
        <div className="contactus-section-header">
          <h2 className="contactus-section-title">Get In Touch</h2>
          <p className="contactus-section-subtitle">Multiple ways to connect with us</p>
        </div>

        <div className="contactus-info-grid">
          {contactInfo.map((info, index) => (
            <div className="contactus-info-card" key={index}>
              <div className="contactus-info-icon">{info.icon}</div>
              <h3 className="contactus-info-title">{info.title}</h3>
              <p className="contactus-info-details">{info.details}</p>
              <p className="contactus-info-description">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="contactus-main-section">
        <div className="contactus-container">
          {/* Contact Form */}
          <div className="contactus-form-wrapper">
            <div className="contactus-form-header">
              <h2 className="contactus-form-title">Send Us a Message</h2>
              <p className="contactus-form-subtitle">Fill out the form below and we'll get back to you shortly</p>
            </div>
            
            <form className="contactus-message-form" onSubmit={handleSubmit}>
              <div className="contactus-form-row">
                <div className="contactus-form-group">
                  <label htmlFor="contactName" className="contactus-form-label">Your Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="contactus-form-input"
                  />
                </div>
                
                <div className="contactus-form-group">
                  <label htmlFor="contactEmail" className="contactus-form-label">Your Email *</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="contactus-form-input"
                  />
                </div>
              </div>
              
              <div className="contactus-form-group">
                <label htmlFor="contactSubject" className="contactus-form-label">Subject *</label>
                <input
                  type="text"
                  id="contactSubject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this regarding?"
                  className="contactus-form-input"
                />
              </div>
              
              <div className="contactus-form-group">
                <label htmlFor="contactMessage" className="contactus-form-label">Your Message *</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Type your message here..."
                  rows="6"
                  className="contactus-form-textarea"
                ></textarea>
              </div>
              
              <button type="submit" className="contactus-submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Departments & Map Sidebar */}
          <div className="contactus-sidebar">
            <div className="contactus-departments-card">
              <h3 className="contactus-sidebar-title">Department Contacts</h3>
              <p className="contactus-sidebar-subtitle">Contact specific departments for specialized queries</p>
              
              <div className="contactus-departments-list">
                {departments.map((dept, index) => (
                  <div className="contactus-dept-item" key={index}>
                    <div className="contactus-dept-icon">📞</div>
                    <div className="contactus-dept-info">
                      <h4 className="contactus-dept-name">{dept.name}</h4>
                      <p className="contactus-dept-phone">{dept.phone}</p>
                      <p className="contactus-dept-email">{dept.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contactus-map-card">
              <h3 className="contactus-sidebar-title">Campus Location</h3>
              <div className="contactus-map-placeholder">
                <div className="contactus-map-image">
                  <div className="contactus-map-overlay">
                    <h4>R-L Technical Institute</h4>
                    <p>Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
                  </div>
                </div>
                <div className="contactus-map-directions">
                  <button className="contactus-direction-btn">📍 Get Directions</button>
                  <button className="contactus-view-btn">🗺️ View Larger Map</button>
                </div>
              </div>
            </div>

            <div className="contactus-hours-card">
              <h3 className="contactus-sidebar-title">Best Time to Contact</h3>
              <div className="contactus-hours-list">
                <div className="contactus-hour-item">
                  <span className="contactus-hour-day">Weekdays</span>
                  <span className="contactus-hour-time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="contactus-hour-item">
                  <span className="contactus-hour-day">Sundays</span>
                  <span className="contactus-hour-time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="contactus-hour-item">
                  <span className="contactus-hour-day">Holidays</span>
                  <span className="contactus-hour-time">Office Closed</span>
                </div>
              </div>
              <p className="contactus-hours-note">* Response time may vary during peak admission season</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contactus-faq-section">
        <div className="contactus-section-header">
          <h2 className="contactus-section-title">Frequently Asked Questions</h2>
          <p className="contactus-section-subtitle">Quick answers to common queries</p>
        </div>

        <div className="contactus-faq-grid">
          <div className="contactus-faq-item">
            <div className="contactus-faq-question">
              <span className="contactus-faq-icon">❓</span>
              <h3>What is the response time for emails?</h3>
            </div>
            <div className="contactus-faq-answer">
              <p>We typically respond to emails within 24-48 hours during working days. During admission season, response time may be slightly longer.</p>
            </div>
          </div>

          <div className="contactus-faq-item">
            <div className="contactus-faq-question">
              <span className="contactus-faq-icon">❓</span>
              <h3>Can I visit the campus without appointment?</h3>
            </div>
            <div className="contactus-faq-answer">
              <p>Yes, you can visit our campus during office hours. However, we recommend calling ahead for specific department visits or counseling sessions.</p>
            </div>
          </div>

          <div className="contactus-faq-item">
            <div className="contactus-faq-question">
              <span className="contactus-faq-icon">❓</span>
              <h3>Do you provide online counseling?</h3>
            </div>
            <div className="contactus-faq-answer">
              <p>Yes, we provide online counseling via video call. Please schedule an appointment by emailing the admission office.</p>
            </div>
          </div>

          <div className="contactus-faq-item">
            <div className="contactus-faq-question">
              <span className="contactus-faq-icon">❓</span>
              <h3>What documents should I bring for admission inquiry?</h3>
            </div>
            <div className="contactus-faq-answer">
              <p>Please bring your SEE/SLC marksheet, character certificate, citizenship copy, and passport size photos for admission counseling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <div className="contactus-quickbar">
        <div className="contactus-quickbar-content">
          <div className="contactus-quickbar-text">
            <h3>Need Immediate Assistance?</h3>
            <p>Call our hotline for urgent queries</p>
          </div>
          <div className="contactus-quickbar-action">
            <a href="tel:+977XXXXXXXXXX" className="contactus-hotline">
              <span className="contactus-hotline-icon">📞</span>
              <span className="contactus-hotline-number">+977-XX-XXXXXXX</span>
            </a>
            <button className="contactus-whatsapp-btn">💬 Chat on WhatsApp</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="contactus-footer">
        <div className="contactus-footer-content">
          <div className="contactus-footer-info">
            <h3 className="contactus-footer-title">R-L Technical Institute</h3>
            <p className="contactus-footer-address">Upper side of Kirat Colony, Bhadrapur-8, Jhapa, Nepal</p>
            <p className="contactus-footer-contact">Phone: +977-XX-XXXXXXX | Email: info@rlinstitute.edu.np</p>
          </div>
          
          <div className="contactus-footer-social">
            <h4 className="contactus-social-title">Follow Us</h4>
            <div className="contactus-social-icons">
              <button className="contactus-social-btn">📘 Facebook</button>
              <button className="contactus-social-btn">📷 Instagram</button>
              <button className="contactus-social-btn">🐦 Twitter</button>
              <button className="contactus-social-btn">📺 YouTube</button>
            </div>
          </div>
          
          <div className="contactus-footer-note">
            <p>© 2024 R-L Technical Institute. All rights reserved.</p>
            <p className="contactus-copyright">CTEVT Affiliated | Government of Nepal Recognized</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Contact;