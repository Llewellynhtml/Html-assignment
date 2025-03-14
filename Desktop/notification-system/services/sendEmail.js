require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to) => {
  console.log(`📧 Sending email to: ${to}`);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: "Annual Return Reminder",
    text: `Dear Valued Client,

This is a friendly reminder that your CIPC certification registration is due for renewal. 

To avoid penalties and ensure compliance, please renew your registration before the deadline. If you need any assistance or have questions, feel free to reach out to us.

Best regards,  
Business Generic Inc.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
    } else {
      console.log(`✅ Email sent successfully: ${info.response}`);
    }
  });
};

module.exports = sendEmail;
