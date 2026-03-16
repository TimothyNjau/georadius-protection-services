import { emailLayout } from "./emailLayout"
import { field, section } from "./helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const quotationTemplate = (data: any) => {

  const client = `
    ${field("Client Name", data.fullName)}
    ${field("Company", data.company)}
    ${field("Email", data.email)}
    ${field("Phone", data.phone)}
  `

  const project = `
    ${field("Service Requested", data.service)}
    ${field("Property Type", data.propertyType)}
    ${field("Location", data.location)}
    ${field("Security Duration", data.securityDuration)}
    ${field("Number of Guards", data.guards)}
    ${data.eventDate ? field("Event Date", data.eventDate) : ""}
    ${field("Project Description", data.message)}
  `

  const content = `
    ${section("Client Information", client)}
    <tr><td style="height:20px"></td></tr>
    ${section("Project Information", project)}
  `

  return emailLayout("New Quotation Request", content)
}