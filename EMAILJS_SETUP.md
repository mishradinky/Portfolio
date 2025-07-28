# EmailJS Setup Guide

## Why You're Seeing the Configuration Error

The contact form is showing an error because EmailJS is not properly configured. This guide will help you set it up correctly.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click "Email Services" → "Add New Service"
3. Choose your email provider (Gmail is recommended)
4. Connect your Gmail account
5. Name your service (e.g., "Portfolio Contact")
6. Copy the **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Use this template structure:

```html
Subject: New message from {{from_name}}

From: {{from_name}} ({{from_email}})
Message: {{message}}

Reply to: {{reply_to}}
```

3. Save the template
4. Copy the **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (starts with your user ID)

### 5. Update Environment Variables
Replace the placeholder values in `.env` with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Restart Your Development Server
After updating the `.env` file, restart your development server:
```bash
npm run dev
```

## Testing the Setup

1. Click on the robot in the contact section
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email for the test message

## Troubleshooting

### Common Issues:
- **"EmailJS is not properly configured"**: Check that all three values in `.env` are correct
- **"Failed to send message"**: Check your EmailJS dashboard for service status
- **No email received**: Check spam folder and EmailJS logs

### EmailJS Dashboard Links:
- [Services](https://dashboard.emailjs.com/admin/services)
- [Templates](https://dashboard.emailjs.com/admin/templates)
- [Account Settings](https://dashboard.emailjs.com/admin/account)

## Security Notes
- Never commit your `.env` file to version control
- Your `.env` file is already in `.gitignore`
- Use environment-specific values for production
