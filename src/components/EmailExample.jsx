import React from 'react';
import ContactForm from './ContactForm';
import './EmailExample.css';

const EmailExample = () => {
  return (
    <div className="email-example-container">
      <div className="example-header">
        <h1>EmailJS Integration Example</h1>
        <p>This is a demonstration of the EmailJS integration with React</p>
      </div>
      
      <ContactForm />
      
      <div className="example-footer">
        <p>
          <strong>Note:</strong> Make sure to configure your EmailJS credentials 
          in your <code>.env</code> file:
        </p>
        <pre>
{`VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key`}
        </pre>
      </div>
    </div>
  );
};

export default EmailExample;
