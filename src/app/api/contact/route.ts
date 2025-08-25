// app/api/contact/route.ts
import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Type definitions
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  service?: string;
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password
    },
    tls: {
      rejectUnauthorized: false,
    }
  });
};

// Email template for the sender (thank you email)
const getSenderEmailTemplate = (senderName: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f8fafc;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                color: white;
                text-align: center;
                padding: 40px 20px;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
            }
            .content {
                padding: 40px 30px;
            }
            .greeting {
                font-size: 20px;
                color: #1f2937;
                margin-bottom: 20px;
                font-weight: 600;
            }
            .message {
                font-size: 16px;
                color: #4b5563;
                margin-bottom: 30px;
            }
            .highlight-box {
                background-color: #eff6ff;
                border-left: 4px solid #2563eb;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 8px 8px 0;
            }
            .contact-info {
                background-color: #f9fafb;
                padding: 25px;
                border-radius: 8px;
                margin: 30px 0;
            }
            .contact-info h3 {
                margin: 0 0 15px 0;
                color: #1f2937;
                font-size: 18px;
            }
            .contact-item {
                display: flex;
                align-items: center;
                margin: 10px 0;
                color: #4b5563;
            }
            .contact-item strong {
                margin-right: 10px;
                min-width: 80px;
                color: #2563eb;
            }
            .footer {
                background-color: #f9fafb;
                text-align: center;
                padding: 30px;
                border-top: 1px solid #e5e7eb;
            }
            .footer p {
                margin: 0;
                color: #6b7280;
                font-size: 14px;
            }
            .cta-button {
                display: inline-block;
                background-color: #2563eb;
                color: white;
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 6px;
                font-weight: 600;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
                <div class="greeting">Hello ${senderName},</div>
                <div class="message">
                    Thank you for contacting us! We've successfully received your message and appreciate you taking the time to reach out to us.
                </div>
                
                <div class="highlight-box">
                    <strong>What happens next?</strong><br>
                    Our team will review your inquiry and get back to you within 24-48 hours. We're excited to learn more about your project and discuss how we can help bring your vision to life.
                </div>

                <div class="contact-info">
                    <h3>Our Contact Information</h3>
                    <div class="contact-item">
                        <strong>Phone:</strong> +91 9627969909
                    </div>
                    <div class="contact-item">
                        <strong>Email:</strong> aekanhibrixo@gmail.com
                    </div>
                    <div class="contact-item">
                        <strong>Address:</strong> Dharamnagri Colony, Near Malviya Chowk, Dhampur, Bijnor, UP – 246761
                    </div>
                </div>

                <div class="message">
                    If you have any urgent questions, please don't hesitate to call us directly. We're here to help!
                </div>
            </div>
            <div class="footer">
                <p>&copy; 2025 Construction Company. All rights reserved.</p>
                <p>This email was sent because you contacted us through our website.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Email template for the receiver (new contact notification)
const getReceiverEmailTemplate = (formData: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f8fafc;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container {
                max-width: 650px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #059669 0%, #047857 100%);
                color: white;
                text-align: center;
                padding: 30px 20px;
            }
            .header h1 {
                margin: 0;
                font-size: 26px;
                font-weight: bold;
            }
            .alert-badge {
                background-color: rgba(255, 255, 255, 0.2);
                padding: 8px 16px;
                border-radius: 20px;
                display: inline-block;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 600;
            }
            .content {
                padding: 35px 30px;
            }
            .form-data {
                background-color: #f9fafb;
                border-radius: 8px;
                padding: 25px;
                margin: 20px 0;
            }
            .form-row {
                display: flex;
                margin: 15px 0;
                border-bottom: 1px solid #e5e7eb;
                padding-bottom: 12px;
            }
            .form-row:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
            .form-label {
                font-weight: 600;
                color: #374151;
                min-width: 120px;
                margin-right: 20px;
            }
            .form-value {
                color: #1f2937;
                flex: 1;
                word-break: break-word;
            }
            .message-box {
                background-color: #eff6ff;
                border: 1px solid #bfdbfe;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
            }
            .message-box h4 {
                margin: 0 0 15px 0;
                color: #1e40af;
                font-size: 16px;
            }
            .message-content {
                color: #1f2937;
                font-style: italic;
                background-color: white;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #2563eb;
            }
            .priority {
                background-color: #fef3c7;
                border: 1px solid #f59e0b;
                color: #92400e;
                padding: 12px 20px;
                border-radius: 6px;
                text-align: center;
                font-weight: 600;
                margin: 20px 0;
            }
            .footer {
                background-color: #f3f4f6;
                text-align: center;
                padding: 25px;
                border-top: 1px solid #e5e7eb;
            }
            .footer p {
                margin: 5px 0;
                color: #6b7280;
                font-size: 14px;
            }
            .timestamp {
                background-color: #e5e7eb;
                padding: 10px;
                text-align: center;
                font-size: 13px;
                color: #4b5563;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🔔 New Contact Form Submission</h1>
                <div class="alert-badge">Requires Response</div>
            </div>
            
            <div class="timestamp">
                Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </div>
            
            <div class="content">
                <div class="priority">
                    ⚡ High Priority - New Customer Inquiry
                </div>

                <div class="form-data">
                    <div class="form-row">
                        <div class="form-label">👤 Name:</div>
                        <div class="form-value">${formData.name}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">📧 Email:</div>
                        <div class="form-value">
                            <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">
                                ${formData.email}
                            </a>
                        </div>
                    </div>
                    ${formData.phone ? `
                    <div class="form-row">
                        <div class="form-label">📞 Phone:</div>
                        <div class="form-value">
                            <a href="tel:${formData.phone}" style="color: #2563eb; text-decoration: none;">
                                ${formData.phone}
                            </a>
                        </div>
                    </div>
                    ` : ''}
                    ${formData.company ? `
                    <div class="form-row">
                        <div class="form-label">🏢 Company:</div>
                        <div class="form-value">${formData.company}</div>
                    </div>
                    ` : ''}
                    ${formData.service ? `
                    <div class="form-row">
                        <div class="form-label">🔧 Service:</div>
                        <div class="form-value">${formData.service}</div>
                    </div>
                    ` : ''}
                </div>

                <div class="message-box">
                    <h4>💬 Customer Message:</h4>
                    <div class="message-content">
                        "${formData.message}"
                    </div>
                </div>

                <div style="background-color: #f0fdf4; border: 1px solid #22c55e; border-radius: 8px; padding: 20px; margin: 25px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #15803d;">📋 Next Steps:</h4>
                    <ul style="margin: 0; padding-left: 20px; color: #166534;">
                        <li>Review the customer requirements</li>
                        <li>Respond within 24-48 hours</li>
                        <li>Schedule a follow-up call if needed</li>
                        <li>Update CRM with this lead</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Automated Contact Form Notification</strong></p>
                <p>Construction Company Management System</p>
                <p>This email was generated automatically from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Email to sender (thank you email)
    const senderMailOptions = {
      from: `"Construction Company" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: '🙏 Thank You for Contacting Us - We\'ll Be in Touch Soon!',
      html: getSenderEmailTemplate(formData.name),
    };

    // Email to receiver (notification email)
    const receiverMailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `🔔 New Contact: ${formData.name} - ${formData.service || 'General Inquiry'}`,
      html: getReceiverEmailTemplate(formData),
      replyTo: formData.email,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(senderMailOptions),
      transporter.sendMail(receiverMailOptions),
    ]);

    return NextResponse.json(
      { 
        message: 'Your message has been sent successfully! We\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}