type FormReasonValue =
  | 'periodicReport'
  | 'changeInTreatmentPlan'
  | 'discharged'
  | 'changeInWorkStatus'
  | 'referralOrConsultation'
  | 'infoRequestedBy'
  | 'changeInPatientsCondition'
  | 'surgeryOrHospitalization'
  | 'other'
  | string

export interface FormReason {
  value: FormReasonValue
  label: string
}

export interface DWC_PR2FormValues {
  reasonsForForm: {
    periodicReport?: string
    changeInTreatmentPlan?: string
    discharged?: string
    changeInWorkStatus?: string
    referralOrConsultation?: string
    infoRequestedBy?: string
    changeInPatientsCondition?: string
    surgeryOrHospitalization?: string
    other?: string
  }
  patientInfo: {
    lastName?: string
    firstName?: string
    middleName?: string
    sex?: string
    dob?: string
    address?: string
    city?: string
    state?: string
    zip?: string | number
    occupation?: string
    ssn?: string | number
    phone?: string
  }
  claimsAdministrator: {
    name?: string
    claimNumber?: string
    address?: string
    city?: string
    state?: string
    zip?: string
    phone?: string
    fax?: string
  }
  employer: {
    name?: string
    phone?: string
  }
  subjectiveComplaints: string
  objectiveFindings: string
  diagnoses: Array<{ diagnose: string; icd9: string }>
  treatmentPlan: string
  workStatusForPatient: {
    remainOffWorkUntil: string
    returnToModifiedWork: {
      on: string
      limitations: string
    }
    returnToFullDuty: {
      on: string
    }
  }
  dateOfExam: string
  signature: string
  licenseNumber: string
  executedAt: string
  date: string
  name: string
  specialty: string
  address: string
  phone: string
  nextReportDueNoLaterThan: string
}
