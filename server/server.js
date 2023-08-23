const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/SendMessage", async (req, res) => {
  try {
    const { fullname, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIEVER_EMAIL,
      subject: subject,
      text: message,
      html: `<p><b>From:</b> ${fullname}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

app.listen(PORT, () => {
  console.log(`App is running localhost: ${PORT}`);
});