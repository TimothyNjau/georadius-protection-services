import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

import { contactTemplate } from "@/emails/contactTemplate"
import { careerTemplate } from "@/emails/careerTemplate"
import { quotationTemplate } from "@/emails/quotationTemplate"

// Create transporter once
const transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
 }
})

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {

 if (req.method !== "POST") {
  return res.status(405).json({ message: "Method not allowed" })
 }

 try {

  const { type, data } = req.body

  if (!type || !data) {
   return res.status(400).json({ message: "Missing form type or data" })
  }

  let subject = ""
  let html = ""

  // Select template depending on form type
  switch (type) {

   case "contact":
    subject = "New Contact Request"
    html = contactTemplate(data)
    break

   case "career":
    subject = "New Career Inquiry"
    html = careerTemplate(data)
    break

   case "quote":
    subject = "New Quotation Request"
    html = quotationTemplate(data)
    break

   default:
    return res.status(400).json({ message: "Invalid form type" })
  }

  await transporter.sendMail({
   from: `"Website Forms" <${process.env.EMAIL_USER}>`,
   to: "georadiusprotection@gmail.com",
   subject,
   html
  })

  return res.status(200).json({ message: "Email sent successfully" })

 } catch (error) {
  console.error(error)

  return res.status(500).json({
    message: "Failed to send email"
  })
}
}