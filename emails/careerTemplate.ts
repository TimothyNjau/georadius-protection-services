import { emailLayout } from "./emailLayout"
import { field, section } from "./helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const careerTemplate = (data: any) => {

  const applicantInfo = `
${field("Applicant Name", data.name)}
${field("Phone", data.phone)}
${field("National ID Number", data.nationalId)}
${field("Age", data.age)}
${field("Gender", data.gender)}
${field("Place of Residency", data.residency)}
${field("Experience", data.experience || "-")}
${field("Additional Message", data.message || "-")}
  `

  const content = `
${section("Career Application Details", applicantInfo)}
  `

  return emailLayout("New Career Application", content)
}