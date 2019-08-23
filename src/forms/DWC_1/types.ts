export interface DWC_1EmployeeFields {
  name?: string
  date?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  injury?: {
    date?: string
    time?: string
    address?: string
    description?: string
  }
  ssn?: string
  receiveClaimNoticesByEmail?: boolean
  email?: string
  signature?: boolean
}

export interface DWC_1EmployerFields {
  name?: string
  address?: string
  dateNoticedInjury?: string
  dateClaimFormProvidedToEmployee?: string
  dateReceivedClaimForm?: string
  insurance?: {
    name?: string
    address?: string
    policyNumber?: string
  }
  signature?: boolean
  title?: string
  phone?: string
}

export interface DWC_1FooterCheckboxes {
  employeeCopy?: boolean
  employerCopy?: boolean
  claimsAdministrator?: boolean
  tempReceipt?: boolean
}

export interface DWC_1FormValues {
  employee?: DWC_1EmployeeFields
  employer?: DWC_1EmployerFields
  footer?: DWC_1FooterCheckboxes
}
