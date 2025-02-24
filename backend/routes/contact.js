/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {

        // Save to MongoDB
        const newContact = new Contact({ firstName, lastName, email, message });
        await newContact.save();
        
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Your Gmail address
                pass: process.env.EMAIL_PASS   // Your Gmail App Password
            }
        });

        // Email content
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Your email
            subject: "New Contact Form Submission",
            text: `You received a message from:
                Name: ${firstName} ${lastName}
                Email: ${email}
                
                Message: 
                ${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message sent successfully!" });
        
    } catch (error) {
        res.status(500).json({ error: "Failed to send the message." });
    }
});

module.exports = router;
