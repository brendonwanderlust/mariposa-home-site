interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const generateContactEmail = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          background-color: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #151A3A 0%, #1e3a8a 100%);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          margin: -30px -30px 30px -30px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 6px;
          border-left: 4px solid #E68902;
        }
        .field-label {
          font-weight: 600;
          color: #151A3A;
          margin-bottom: 5px;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.5px;
        }
        .field-value {
          font-size: 16px;
          color: #555;
          word-wrap: break-word;
        }
        .message-field {
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          padding: 15px;
          margin-top: 10px;
          white-space: pre-wrap;
          font-family: inherit;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6c757d;
          font-size: 14px;
          text-align: center;
        }
        .brand {
          color: #E68902;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🦋 New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Mariposa Home Care</p>
        </div>
        
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email Address</div>
          <div class="field-value">
            <a href="mailto:${data.email}" style="color: #E68902; text-decoration: none;">${data.email}</a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Subject</div>
          <div class="field-value">${data.subject}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-field">${data.message}</div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the <span class="brand">Mariposa Home Care</span> contact form.</p>
          <p>Please respond to the sender at: <a href="mailto:${data.email}" style="color: #E68902;">${data.email}</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const generateAutoReplyEmail = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Mariposa Home Care</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          background-color: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #88AD17 0%, #65a30d 100%);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          margin: -30px -30px 30px -30px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content {
          font-size: 16px;
          line-height: 1.8;
        }
        .highlight {
          color: #E68902;
          font-weight: 600;
        }
        .contact-info {
          background-color: #f8f9fa;
          border-radius: 6px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #151A3A;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6c757d;
          font-size: 14px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🦋 Thank You, ${data.name}!</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">We've received your message</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for reaching out to <span class="highlight">Mariposa Home Care</span>. We have received your message and greatly appreciate your interest in our services.</p>
          
          <p>Our team will review your inquiry and respond within <strong>24 hours</strong>. In the meantime, please don't hesitate to call us if you have any urgent questions or would like to speak with someone immediately.</p>
          
          <div class="contact-info">
            <h3 style="margin-top: 0; color: #151A3A;">Contact Information</h3>
            <p><strong>Phone:</strong> <a href="tel:+16124004532" style="color: #E68902; text-decoration: none;">(612) 400-4532</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@mariposahomecare.com" style="color: #E68902; text-decoration: none;">info@mariposahomecare.com</a></p>
            <p><strong>Website:</strong> <a href="https://www.mariposahomecare.com" style="color: #E68902; text-decoration: none;">www.mariposahomecare.com</a></p>
          </div>
          
          <p>We look forward to helping you and your family with compassionate, personalized care.</p>
          
          <p>Warm regards,<br>
          <span class="highlight">The Mariposa Home Care Team</span></p>
        </div>
        
        <div class="footer">
          <p>This is an automated response. Please do not reply to this email.</p>
          <p>© 2024 Mariposa Home Care. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
