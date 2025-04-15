const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// @route   POST api/contact
// @desc    Send contact email
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // In a real app, you would set up a proper transporter with your email credentials
  // This example just logs the message and returns success
  console.log('Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  try {
    // Mock successful email sending
    // In production, you would use nodemailer to actually send the email
    
    // For example:
    /*
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your-email@example.com',
      subject: `Portfolio Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });
    */

    res.json({ success: true, msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err.message);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
});

module.exports = router;