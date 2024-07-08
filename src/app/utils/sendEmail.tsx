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

// Function to send email
export async function sendEmail({ from, subject, text }: EmailParams): Promise<void> {
  try {
    console.log('from', from)
    // send mail with defined transport object
    await transporter.sendMail({
      from,
      to: 'dharmik.kachhadiya.02@gmail.com',
      subject,
      text,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}