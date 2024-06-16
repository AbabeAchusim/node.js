// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-password' // Replace with your password
  }
});

// Setup email data
let mailOptions = {
  from: 'your-email@gmail.com', // Replace with your email
  to: 'recipient-email@example.com', // Replace with recipient email
  subject: 'Test Email from Node.js',
  text: 'Hello from Node.js!',
  html: '<h1>Hello from Node.js!</h1>'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
