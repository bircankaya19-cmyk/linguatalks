
// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, country, goals } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: "info@linguatalks.co.uk",
        pass: process.env.ZOHO_PASS, // Vercel env variable
      },
    });

    await transporter.sendMail({
      from: `"LinguaTalks Form" <info@linguatalks.co.uk>`,
      to: "info@linguatalks.co.uk",
      subject: "Yeni İletişim Formu",
      text: `
İsim: ${name}
Email: ${email}
Ülke/Zaman Dilimi: ${country}
Hedefler: ${goals}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
