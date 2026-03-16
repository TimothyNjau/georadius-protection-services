import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { subject, html } = req.body;

  if (!subject || !html) {
    return res.status(400).json({ message: "Missing subject or html" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // set in .env
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "georadiusprotection@gmail.com",
      subject,
      html,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}