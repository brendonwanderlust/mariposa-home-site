# Firebase Cloud Functions - Mariposa Home Care

This directory contains Firebase Cloud Functions for handling email sending and other backend functionality for the Mariposa Home Care website.

## Overview

The main function in this project is `sendContactEmail`, which handles contact form submissions from the website and sends professional emails using Nodemailer.

### Features

- ✅ **Rate Limiting**: Prevents abuse (5 emails per IP per hour)
- ✅ **Input Validation**: Comprehensive validation and sanitization
- ✅ **Professional Email Templates**: HTML emails with Mariposa branding
- ✅ **Auto-Reply System**: Automatic confirmation emails to users
- ✅ **CORS Protection**: Secure cross-origin requests
- ✅ **Error Handling**: Comprehensive logging and error responses
- ✅ **TypeScript**: Full type safety and modern development experience

## Setup Instructions

### 1. Install Dependencies

```bash
cd functions
npm install
```

### 2. Configure Environment Variables

Set the following environment variables in Firebase:

```bash
# Email Service Configuration
firebase functions:config:set smtp.host="smtp.gmail.com"
firebase functions:config:set smtp.port="587"
firebase functions:config:set smtp.user="your-email@gmail.com"
firebase functions:config:set smtp.pass="your-app-password"

# Business Configuration
firebase functions:config:set email.recipient="info@mariposahomecare.com"
firebase functions:config:set app.frontend_url="https://mariposahomecare.com"
```

#### For Gmail Setup:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use the generated password for `smtp.pass`

#### For SendGrid Setup:
```bash
firebase functions:config:set smtp.host="smtp.sendgrid.net"
firebase functions:config:set smtp.port="587"
firebase functions:config:set smtp.user="apikey"
firebase functions:config:set smtp.pass="your-sendgrid-api-key"
```

#### For Mailgun Setup:
```bash
firebase functions:config:set smtp.host="smtp.mailgun.org"
firebase functions:config:set smtp.port="587"
firebase functions:config:set smtp.user="postmaster@your-domain.mailgun.org"
firebase functions:config:set smtp.pass="your-mailgun-password"
```

### 3. Local Development

For local development, create a `.env` file in the functions directory:

```bash
# functions/.env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=info@mariposahomecare.com
FRONTEND_URL=http://localhost:5173
```

### 4. Build and Deploy

```bash
# Build the functions
npm run build

# Deploy to Firebase
npm run deploy

# Or deploy all Firebase services
firebase deploy
```

### 5. Local Testing

```bash
# Start the Firebase emulator
npm run serve

# Test the function locally
curl -X POST http://localhost:5001/mariposa-home-care/us-central1/sendContactEmail \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

## Function Details

### `sendContactEmail`

**Endpoint**: `https://us-central1-mariposa-home-care.cloudfunctions.net/sendContactEmail`

**Method**: POST

**Request Body**:
```typescript
{
  name: string;        // 2-100 characters
  email: string;       // Valid email address
  subject: string;     // 5-200 characters
  message: string;     // 10-2000 characters
}
```

**Response**:
```typescript
// Success (200)
{
  success: true,
  message: "Your message has been sent successfully...",
  code: "SUCCESS"
}

// Error (400/429/500)
{
  error: string,
  code: string,
  details?: any
}
```

**Error Codes**:
- `METHOD_NOT_ALLOWED`: Non-POST request
- `INVALID_BODY`: Invalid JSON body
- `MISSING_FIELDS`: Required fields missing
- `VALIDATION_ERROR`: Input validation failed
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `EMAIL_SERVICE_ERROR`: Email service unavailable
- `SEND_ERROR`: Failed to send email
- `CONFIG_ERROR`: Environment configuration error

## File Structure

```
functions/
├── src/
│   ├── index.ts                 # Main exports
│   ├── contactForm.ts           # Contact form function
│   └── utils/
│       ├── emailTemplate.ts     # HTML email templates
│       ├── emailService.ts      # Email sending service
│       └── validation.ts        # Input validation & sanitization
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Security Features

### Input Validation
- Field length limits
- Email format validation
- Character restrictions (no HTML/script injection)
- Input sanitization with DOMPurify

### Rate Limiting
- 5 emails per IP per hour
- Prevents spam and abuse
- Customizable time windows

### CORS Protection
- Restricts requests to authorized domains
- Configurable origin whitelist
- Credentials support for authenticated requests

### Environment Security
- No secrets in code
- Environment variable validation
- Secure email authentication

## Monitoring and Logging

The function includes comprehensive logging:

```bash
# View function logs
firebase functions:log

# Filter by function
firebase functions:log --only sendContactEmail

# Real-time logs
firebase functions:log --follow
```

**Log Events**:
- Contact form submissions
- Validation errors
- Rate limit violations
- Email sending success/failure
- CORS violations
- Environment issues

## Troubleshooting

### Common Issues

1. **Environment Variables Not Set**
   ```
   Error: Missing required environment variables
   ```
   Solution: Ensure all required environment variables are configured

2. **CORS Error**
   ```
   Error: Not allowed by CORS
   ```
   Solution: Add your domain to the allowed origins in `validation.ts`

3. **Email Authentication Failed**
   ```
   Error: Email service connection failed
   ```
   Solution: Verify your SMTP credentials and enable app passwords

4. **Rate Limit Issues**
   ```
   Error: Too many contact form submissions
   ```
   Solution: Wait or adjust rate limit settings in `contactForm.ts`

### Testing Email Configuration

```bash
# Test email service connection
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
transporter.verify().then(console.log).catch(console.error);
"
```

## Support

For issues or questions:
1. Check the Firebase console logs
2. Verify environment variables
3. Test email credentials
4. Review CORS settings
5. Contact the development team

---

**Last Updated**: December 2024
**Version**: 1.0.0