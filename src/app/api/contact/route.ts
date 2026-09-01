import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

function generateEmailHtml(name: string, email: string, message: string, dateStr: string) {
  const sanitizedMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #08060d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #08060d; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #120f1f; border-radius: 20px; border: 1px solid rgba(188, 98, 180, 0.25); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); overflow: hidden;">
          
          <!-- Top Accent Gradient Bar -->
          <tr>
            <td height="5" style="background: linear-gradient(90deg, #bc62b4 0%, #00f0ff 50%, #28ca41 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 36px 36px 20px 36px; text-align: left;">
              <div style="display: inline-block; padding: 5px 12px; background: rgba(188, 98, 180, 0.15); border: 1px solid rgba(188, 98, 180, 0.35); border-radius: 999px; font-size: 11px; font-weight: 700; color: #bc62b4; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;">
                Portfolio Inquiry
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                New Message Received
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">
                You received a new direct contact form submission from your portfolio website.
              </p>
            </td>
          </tr>

          <!-- Sender Information Box -->
          <tr>
            <td style="padding: 0 36px 24px 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #1a162b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 18px 22px;">
                <tr>
                  <td style="padding-bottom: 12px; width: 30%; font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">
                    From:
                  </td>
                  <td style="padding-bottom: 12px; font-size: 14px; font-weight: 700; color: #ffffff;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px; font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email:
                  </td>
                  <td style="padding-bottom: 12px; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">
                    Received At:
                  </td>
                  <td style="font-size: 13px; color: #cbd5e1;">
                    ${dateStr}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Container -->
          <tr>
            <td style="padding: 0 36px 30px 36px;">
              <div style="font-size: 12px; font-weight: 700; color: #bc62b4; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                Message Content
              </div>
              <div style="background-color: #0d0b16; border-left: 3px solid #bc62b4; border-radius: 0 12px 12px 0; padding: 20px; font-size: 14px; color: #f1f5f9; line-height: 1.7; word-break: break-word;">
                ${sanitizedMessage}
              </div>
            </td>
          </tr>

          <!-- CTA Action -->
          <tr>
            <td style="padding: 0 36px 36px 36px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                <tr>
                  <td style="border-radius: 12px; background: linear-gradient(135deg, #bc62b4, #8e3f88); box-shadow: 0 8px 20px rgba(188, 98, 180, 0.4);">
                    <a href="mailto:${email}?subject=Re: Your Inquiry (Wahab Mehar Portfolio)" target="_blank" style="display: inline-block; padding: 14px 30px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 12px;">
                      Reply Directly to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0a0812; padding: 20px 36px; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                Sent from your interactive Portfolio Contact Module • Wahab Mehar Portfolio
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide Name, Email, and Message.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'wahabmhar@gmail.com';
    const now = new Date();
    const dateFormatted = now.toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const emailHtml = generateEmailHtml(name, email, message, dateFormatted);
    const emailText = `
NEW PORTFOLIO CONTACT INQUIRY
=====================================
From: ${name}
Email: ${email}
Received: ${dateFormatted}

Message:
-------------------------------------
${message}
-------------------------------------
Reply to: ${email}
    `.trim();

    let emailDispatched = false;
    let dispatchMethod = 'none';

    // 1. Check for SMTP credentials (Gmail App Password or Custom SMTP)
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const isSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: isSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `✨ New Portfolio Inquiry from ${name}`,
          text: emailText,
          html: emailHtml,
        });

        emailDispatched = true;
        dispatchMethod = 'smtp';
        console.log(`[Contact API] Email successfully dispatched via SMTP to ${receiverEmail}`);
      } catch (smtpErr) {
        console.error('[Contact API] SMTP dispatch failed:', smtpErr);
      }
    }

    // 2. Check for Resend API Key fallback
    if (!emailDispatched && process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
            to: [receiverEmail],
            reply_to: email,
            subject: `✨ New Portfolio Inquiry from ${name}`,
            text: emailText,
            html: emailHtml,
          }),
        });

        if (resendRes.ok) {
          emailDispatched = true;
          dispatchMethod = 'resend';
          console.log(`[Contact API] Email successfully dispatched via Resend to ${receiverEmail}`);
        } else {
          const errText = await resendRes.text();
          console.error('[Contact API] Resend API failed:', errText);
        }
      } catch (resendErr) {
        console.error('[Contact API] Resend dispatch error:', resendErr);
      }
    }

    // 3. Check for n8n Webhook fallback / sync
    const n8nContactWebhook = process.env.N8N_CONTACT_WEBHOOK_URL || process.env.N8N_JARVIS_WEBHOOK_URL;
    if (n8nContactWebhook && !n8nContactWebhook.includes('your-n8n-instance.com')) {
      try {
        await fetch(n8nContactWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'contact_form_submission',
            name,
            email,
            message,
            timestamp: now.toISOString(),
            receiverEmail,
          }),
        });
        if (!emailDispatched) {
          emailDispatched = true;
          dispatchMethod = 'n8n_webhook';
        }
      } catch (n8nErr) {
        console.warn('[Contact API] n8n webhook notification warning:', n8nErr);
      }
    }

    // If SMTP is not yet configured in local development, log to server console for testing
    if (!emailDispatched) {
      console.log('----------------------------------------------------');
      console.log('📩 [LOCAL DEV CONTACT SUBMISSION]');
      console.log(`From: ${name} <${email}>`);
      console.log(`To: ${receiverEmail}`);
      console.log(`Message: ${message}`);
      console.log('💡 Note: To receive live emails in your Gmail inbox, add SMTP_USER and SMTP_PASS (Gmail App Password) to your .env.local file.');
      console.log('----------------------------------------------------');
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been received! Wahab will respond promptly.',
      dispatched: emailDispatched,
      method: dispatchMethod,
      timestamp: now.toISOString(),
    });
  } catch (error) {
    console.error('[Contact API] Internal Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while sending your message.' },
      { status: 500 }
    );
  }
}
