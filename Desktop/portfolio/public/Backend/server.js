const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());  
app.use(bodyParser.json());  


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'Lsg.mllewellyn@gmail.com',  
    pass: 'Lsg@_1994',   
  },
});


app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  
  const mailOptions = {
    from: email,  
    to: 'Lsg.mllewellyn@gmail.com',  
    subject: `New message from ${name}`,  
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,  
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error sending message' });  
    }
    console.log('Message sent:', info);
    return res.status(200).json({ message: 'Message sent successfully' });  
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
