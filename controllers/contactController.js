import ContactMessage from '../models/ContactMessage.js';
import nodemailer from 'nodemailer';

export const sendContact = async (req, res) => {
  const { name, email,subject, message } = req.body;

  try {
    const entry = new ContactMessage({ name, email,subject, message });
    await entry.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: message
    });

    res.status(200).json({ message: 'Message sent and saved' });
  } catch (error) {
    console.error('Email error:', error); // log the real issue
    res.status(500).json({ error: 'Failed to send message', details: error.message });
}

};
