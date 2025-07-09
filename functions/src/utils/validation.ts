import { body } from 'express-validator';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Create a clean DOM environment for DOMPurify
const window = new JSDOM('').window;
const purify = DOMPurify(window);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage('Email address is too long'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters')
    .matches(/^[a-zA-Z0-9\s.,!?'-]+$/)
    .withMessage('Subject contains invalid characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

export const sanitizeInput = (data: ContactFormData): ContactFormData => {
  return {
    name: purify.sanitize(data.name.trim(), { ALLOWED_TAGS: [] }),
    email: purify.sanitize(data.email.trim().toLowerCase(), { ALLOWED_TAGS: [] }),
    subject: purify.sanitize(data.subject.trim(), { ALLOWED_TAGS: [] }),
    message: purify.sanitize(data.message.trim(), { ALLOWED_TAGS: [] })
  };
};

export const validateEnvironmentVariables = (): void => {
  const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'RECIPIENT_EMAIL',
    'FRONTEND_URL'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};

export const isValidOrigin = (origin: string | undefined): boolean => {
  if (!origin) return false;
  
  const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173'
  ].filter(Boolean);

  return allowedOrigins.includes(origin);
};