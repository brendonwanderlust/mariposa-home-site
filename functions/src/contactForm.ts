import cors from "cors";
import { validationResult } from "express-validator";
import { logger } from "firebase-functions";
import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import type { Request as ExpressRequest, Response as ExpressResponse } from "express";
import { EmailService } from "./utils/emailService";
import {
  ContactFormData,
  isValidOrigin,
  sanitizeInput,
  validateContactForm,
  validateEnvironmentVariables,
} from "./utils/validation";

// Set global options for all functions
setGlobalOptions({ maxInstances: 10 });

// Rate limiting middleware
// const limiter = rateLimit({
//   windowMs: 60 * 60 * 1000, // 1 hour
//   max: 5, // Limit each IP to 5 requests per windowMs
//   message: {
//     error:
//       "Too many contact form submissions from this IP, please try again later.",
//     code: "RATE_LIMIT_EXCEEDED",
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
//   handler: (req, res) => {
//     logger.warn("Rate limit exceeded", {
//       ip: req.ip,
//       userAgent: req.get("User-Agent"),
//       timestamp: new Date().toISOString(),
//     });
//     res.status(429).json({
//       error:
//         "Too many contact form submissions from this IP, please try again later.",
//       code: "RATE_LIMIT_EXCEEDED",
//     });
//   },
// });

// CORS configuration
const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow?: boolean) => void
  ) => {
    if (isValidOrigin(origin)) {
      callback(null, true);
    } else {
      logger.warn("CORS blocked request from unauthorized origin", { origin });
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export const sendContactEmail = onRequest(
  {
    memory: "256MiB",
    timeoutSeconds: 30,
    maxInstances: 10,
  },
  async (request, response) => {
    // Handle CORS manually
    const corsHandler = cors(corsOptions);

    return new Promise((resolve, reject) => {
      corsHandler(request as ExpressRequest, response as ExpressResponse, (err?: Error) => {
        if (err) {
          logger.warn("CORS blocked request", {
            origin: request.headers.origin,
            error: err.message,
          });
          response.status(403).json({
            error: "Not allowed by CORS",
            code: "CORS_ERROR",
          });
          resolve(undefined);
          return;
        }

        // Continue with the main handler
        handleRequest(request, response).then(resolve).catch(reject);
      });
    });
  }
);

async function handleRequest(request: ExpressRequest, response: ExpressResponse) {
  // Validate environment variables on startup
  try {
    validateEnvironmentVariables();
  } catch (error) {
    logger.error("Environment validation failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    response.status(500).json({
      error: "Server configuration error",
      code: "CONFIG_ERROR",
    });
    return;
  }

  // Only allow POST requests
  if (request.method !== "POST") {
    response.status(405).json({
      error: "Method not allowed. Only POST requests are supported.",
      code: "METHOD_NOT_ALLOWED",
    });
    return;
  }

  // Apply rate limiting (simplified for function context)
  // Note: In a real implementation, you might want to use a database-backed rate limiter

  // Parse request body
  let requestData: ContactFormData;
  try {
    requestData = request.body as ContactFormData;

    if (!requestData || typeof requestData !== "object") {
      throw new Error("Invalid request body");
    }
  } catch (error) {
    logger.warn("Invalid request body", {
      error: error instanceof Error ? error.message : "Unknown error",
      body: request.body,
    });
    response.status(400).json({
      error: "Invalid request body. Expected JSON object.",
      code: "INVALID_BODY",
    });
    return;
  }

  // Validate required fields
  const requiredFields = ["name", "email", "subject", "message"];
  const missingFields = requiredFields.filter(
    (field) => !requestData[field as keyof ContactFormData]
  );

  if (missingFields.length > 0) {
    response.status(400).json({
      error: "Missing required fields",
      code: "MISSING_FIELDS",
      fields: missingFields,
    });
    return;
  }

  // Sanitize input data
  const sanitizedData = sanitizeInput(requestData);

  // Validate sanitized data
  const mockReq = { body: sanitizedData } as Partial<ExpressRequest>;

  // Run validation
  for (const validation of validateContactForm) {
    validation(mockReq, {} as Partial<ExpressResponse>, () => {});
  }

  const errors = validationResult(mockReq);
  if (!errors.isEmpty()) {
    logger.warn("Validation errors", {
      errors: errors.array(),
      data: sanitizedData,
    });
    response.status(400).json({
      error: "Validation failed",
      code: "VALIDATION_ERROR",
      details: errors.array(),
    });
    return;
  }

  // Initialize email service
  const emailService = new EmailService();

  // Verify email service connection
  const isConnected = await emailService.verifyConnection();
  if (!isConnected) {
    logger.error("Email service connection failed");
    response.status(500).json({
      error: "Email service unavailable",
      code: "EMAIL_SERVICE_ERROR",
    });
    return;
  }

  try {
    // Send contact email to business
    await emailService.sendContactEmail(sanitizedData);

    // Send auto-reply to user (non-blocking)
    emailService.sendAutoReply(sanitizedData).catch((error) => {
      logger.warn("Auto-reply failed", {
        error: error instanceof Error ? error.message : "Unknown error",
        userEmail: sanitizedData.email,
      });
    });

    // Log successful submission
    logger.info("Contact form submitted successfully", {
      senderEmail: sanitizedData.email,
      subject: sanitizedData.subject,
      timestamp: new Date().toISOString(),
      ip: request.ip,
      userAgent: request.get("User-Agent"),
    });

    response.status(200).json({
      success: true,
      message:
        "Your message has been sent successfully. We will get back to you within 24 hours.",
      code: "SUCCESS",
    });
  } catch (error) {
    logger.error("Failed to process contact form", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      data: sanitizedData,
    });

    response.status(500).json({
      error:
        "Failed to send message. Please try again later or contact us directly.",
      code: "SEND_ERROR",
    });
  }
}
