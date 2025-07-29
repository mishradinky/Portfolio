import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

/**
 * Send email using EmailJS
 * @param {Object} emailData - Email data containing name, email, and message
 * @param {string} emailData.name - Sender's name
 * @param {string} emailData.email - Sender's email address
 * @param {string} emailData.message - Message content
 * @returns {Promise<Object>} - Promise resolving to EmailJS response
 */
export const sendEmail = async ({ name, email, message }) => {
  try {
    // Validate input parameters
    if (!name || !email || !message) {
      throw new Error('Please provide name, email, and message');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please provide a valid email address');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Dinky Mishra', // Your name
      reply_to: email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      data: response,
      message: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: error,
      message: error.text || 'Failed to send email. Please try again.',
    };
  }
};

/**
 * Send contact form email with additional validation
 * @param {Object} formData - Form data
 * @returns {Promise<Object>} - Promise resolving to EmailJS response
 */
export const sendContactEmail = async (formData) => {
  const { fullName, email, message } = formData;
  
  return sendEmail({
    name: fullName,
    email: email,
    message: message,
  });
};
