import { emailLayout } from "./emailLayout"
import { field, section } from "./helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const contactTemplate = (data:any) => {

const fields = `
${field("Name", data.name)}
${field("Email", data.email)}
${field("Subject", data.subject)}
${field("Message", data.message)}
`

const content = `
${section("Contact Details", fields)}
`

return emailLayout("New Contact Request", content)

}