// EmailJS Configuration using environment variables

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  return Boolean(
    EMAILJS_CONFIG.SERVICE_ID && 
    EMAILJS_CONFIG.TEMPLATE_ID && 
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};

// Default template parameters structure
export const getTemplateParams = (formData) => ({
  from_name: formData.fullName,
  from_email: formData.email,
  message: formData.message,
  to_name: 'Dinky Mishra', // Your name
  reply_to: formData.email,
});
