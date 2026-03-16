import GPS_LOGO from '@/public/assets/images/GPS_LOGO.png';
export const emailLayout = (title: string, content: string) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
</head>

<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:40px 0">

<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:white;border-radius:8px;overflow:hidden">

<tr>
  <td style="background:#2f3293;padding:30px;text-align:center">

    <img src="https://gps-security.vercel.app/assets/images/GPS_LOGO.png" width="140" alt="Company Logo"/>

  </td>
</tr>

<tr>
<td style="padding:35px 40px 15px 40px">

<h2 style="margin:0;color:#111827;font:30px">${title}</h2>

<p style="margin-top:8px;color:#6b7280;font-size:26px">
A request has been submitted from the website.
</p>

</td>
</tr>

<tr>
<td style="padding:10px 40px 30px 40px">

<table width="100%" style="font:28px">
${content}
</table>

</td>
</tr>

<tr>
<td align="center" style="padding-bottom:40px">

<a href="mailto:info@yourcompany.com"
style="
background:#ee292c;
color:white;
text-decoration:none;
padding:12px 26px;
border-radius:6px;
font-weight:600;
display:inline-block;
">
Reply to Request
</a>

</td>
</tr>

<tr>
<td style="background:#f9fafb;padding:28px;text-align:center;font-size:12px;color:#6b7280">

<p style="margin:0 0 5px 0">
© 2026 Your Company
</p>

<p style="margin:0 0 5px 0">
Nairobi, Kenya
</p>

<p style="margin:0">
<a href="mailto:info@yourcompany.com" style="color:#2f3293;text-decoration:none">
info@yourcompany.com
</a>
</p>

</td>
</tr>

</table>

</td>
</tr>

</table>

</body>
</html>
`