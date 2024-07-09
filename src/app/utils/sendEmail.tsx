'use server'
import nodemailer from 'nodemailer';

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Your SMTP host
  port: 587, // Your SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'dharmik.kachhadiya.02@gmail.com', // Your email
    pass: 'ayak mbif qwcm zaxk',
  },
});

// Interface for email parameters
interface EmailParams {
  from: string;
  subject: string;
  text: string;
}

export async function sendEmail({ from, subject, text }: EmailParams): Promise<void> {
  try {
    await transporter.sendMail({
      from,
      to: 'dharmik.kachhadiya.02@gmail.com',
      subject,
      text,
      replyTo: from
    });
  } catch (error) {
    throw new Error('Failed to send email');
  }
}