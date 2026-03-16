export const field = (label: string, value: string) => `
<tr>
<td style="padding:12px 0;border-bottom:1px solid #e5e7eb">
<span style="font-weight:600;color:#111827">${label}</span><br/>
<span style="color:#4b5563">${value ?? ""}</span>
</td>
</tr>
`

export const section = (title: string, content: string) => `
<tr>
<td style="padding:22px;border:1px solid #e5e7eb;border-radius:6px;background:#fafafa">

<h3 style="margin:0 0 16px 0;font-size:28px;color:#2f3293">
${title}
</h3>

<table width="100%" cellpadding="0" cellspacing="0" style="font:24px">
${content}
</table>

</td>
</tr>
`