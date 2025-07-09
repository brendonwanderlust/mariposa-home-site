import { logger } from "firebase-functions";
import * as nodemailer from "nodemailer";
import { generateAutoReplyEmail, generateContactEmail } from "./emailTemplate";
import { ContactFormData } from "./validation";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: parseInt(process.env.SMTP_PORT!),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendContactEmail(data: ContactFormData): Promise<void> {
    const htmlContent = generateContactEmail(data);

    const mailOptions = {
      from: {
        name: "Mariposa Home Care Website",
        address: process.env.SMTP_USER!,
      },
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: htmlContent,
      replyTo: data.email,
      headers: {
        "X-Mailer": "Mariposa Home Care Contact Form",
        "X-Priority": "1",
      },
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      logger.info("Contact email sent successfully", {
        messageId: info.messageId,
        senderEmail: data.email,
        subject: data.subject,
      });
    } catch (error) {
      logger.error("Failed to send contact email", {
        error: error instanceof Error ? error.message : "Unknown error",
        senderEmail: data.email,
        subject: data.subject,
      });
      throw new Error("Failed to send contact email");
    }
  }

  async sendAutoReply(data: ContactFormData): Promise<void> {
    const htmlContent = generateAutoReplyEmail(data);

    const mailOptions = {
      from: {
        name: "Mariposa Home Care",
        address: process.env.SMTP_USER!,
      },
      to: data.email,
      subject: "Thank you for contacting Mariposa Home Care",
      html: htmlContent,
      headers: {
        "X-Mailer": "Mariposa Home Care Auto-Reply",
        "X-Auto-Response-Suppress": "All",
      },
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      logger.info("Auto-reply email sent successfully", {
        messageId: info.messageId,
        recipientEmail: data.email,
      });
    } catch (error) {
      logger.error("Failed to send auto-reply email", {
        error: error instanceof Error ? error.message : "Unknown error",
        recipientEmail: data.email,
      });
      // Don't throw error for auto-reply failures - it's not critical
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      logger.info("Email service connection verified successfully");
      return true;
    } catch (error) {
      logger.error("Email service connection failed", {
        error: error instanceof Error ? error.message : "Unknown error",
      });
      return false;
    }
  }
}
