import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import WavingRobotLottie from '../components/WavingRobotLottie';
import './ContactSectionWithRobot.css';
import { EMAILJS_CONFIG, getTemplateParams } from '../config/emailjs.config';

const ContactSectionWithRobot = ({ currentSection, sectionIndex }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYouRobot, setShowThankYouRobot] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Reset to main screen when navigating away from this section
  useEffect(() => {
    if (currentSection !== sectionIndex) {
      setShowContactForm(false);
      setShowPopup(false);
    }
  }, [currentSection, sectionIndex]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
    };
  }, [showPopup]);

  const handleRobotClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading state
    const submitButton = e.target.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending... <span class="send-icon">⏳</span>';
    submitButton.disabled = true;

    // Send email using EmailJS
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      getTemplateParams(formData),
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      
      // Reset form data
      setFormData({ fullName: '', email: '', message: '' });
      
      // Close popup and show thank you robot
      setShowPopup(false);
      setShowThankYouRobot(true);
      
      // Hide thank you robot after 4 seconds
      setTimeout(() => {
        setShowThankYouRobot(false);
      }, 4000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact me directly via email.');
      
      // Reset button state
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    });
  };

  const contactDetails = [
    {
      icon: "📧",
      label: "Email",
      value: "mishradinky@gmail.com",
      href: "mailto:mishradinky@gmail.com",
      type: "email"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/mishradinky",
      href: "https://www.linkedin.com/in/mishradinky/",
      type: "linkedin"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/mishradinky",
      href: "https://github.com/mishradinky",
      type: "github"
    }
  ];

  return (
    <div className="contact-section-with-robot">
      {showThankYouRobot ? (
        <div className="thank-you-robot-container">
          <div className="robot-section">
            {/* Thinking bubble for thank you message */}
            <div className="thinking-bubble thank-you-bubble">
              <span className="bubble-text">I'll get back to you shortly! 🤖</span>
            </div>
            
            <div className="hero-lottie">
              <WavingRobotLottie width={350} height={350} />
            </div>
          </div>
        </div>
      ) : (
        <div className="contact-intro">
          {/* Robot section */}
          <div className="robot-section">
            {/* Thinking bubble */}
            <div className="thinking-bubble">
              <div className="typing-animation">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <span className="bubble-text">Let's connect!</span>
            </div>
            
            <div className="hero-lottie" onClick={handleRobotClick}>
              <WavingRobotLottie width={350} height={350} />
            </div>
          </div>

          {/* Welcome text */}
          <div className="welcome-text">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Click the robo to send me a message
            </p>
            
            {/* Contact details */}
            <div className="contact-details-grid">
              {contactDetails.map((detail, index) => (
                <a 
                  key={index}
                  href={detail.href}
                  target={detail.type === "linkedin" || detail.type === "github" ? "_blank" : undefined}
                  rel={detail.type === "linkedin" || detail.type === "github" ? "noopener noreferrer" : undefined}
                  className="contact-detail-card"
                >
                  <div className="contact-icon">{detail.icon}</div>
                  <div className="contact-info">
                    <div className="contact-label">{detail.label}</div>
                    <div className="contact-value">{detail.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="contact-popup-overlay" onClick={handleClosePopup}>
          <div className="contact-popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="contact-popup-header">
              <h2 className="contact-popup-title">Let's Connect</h2>
              <button className="contact-popup-close" onClick={handleClosePopup}>
                ×
              </button>
            </div>
            
            <div className="contact-popup-content">
              <div className="contact-form-section">
                <form className="contact-form-popup" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Send Message
                    <span className="send-icon">✈️</span>
                  </button>
                </form>
              </div>

              <div className="contact-info-popup">
                <h3>Or reach me directly</h3>
                <div className="direct-contact-list">
                  {contactDetails.map((detail, index) => (
                    <a 
                      key={index}
                      href={detail.href}
                      target={detail.type === "linkedin" || detail.type === "github" ? "_blank" : undefined}
                      rel={detail.type === "linkedin" || detail.type === "github" ? "noopener noreferrer" : undefined}
                      className="direct-contact-item"
                    >
                      <span className="direct-icon">{detail.icon}</span>
                      <span className="direct-text">{detail.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSectionWithRobot;
