export interface RFA_ClaimsAdministratorFields {
    companyName?: string;
    contactName?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    fax?: string;
    email?: string;
}
export interface RFA_EmployeeFields {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    dateOfInjury?: string;
    claimNumber?: string;
    dob?: string;
    employer?: string;
}
export interface RFA_FormValues {
    newRequest?: boolean;
    expeditedReview?: boolean;
    confirmationPriorOralRequest?: boolean;
    resubmission?: boolean;
    employee?: RFA_EmployeeFields;
    physician: RFA_PhysicianFields;
    claimsAdministrator: RFA_ClaimsAdministratorFields;
    requestedTreatment: RFA_RequestedTreatmentFields;
    physicianSignature?: RFA_PhysicianSignatureFields;
    uroResponse: RFA_UROResponseFields;
}
export interface RFA_PhysicianFields {
    name?: string;
    practiceName?: string;
    contactName?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    fax?: string;
    specialty?: string;
    NPI?: string;
    email?: string;
}
export interface RFA_PhysicianSignatureFields {
    signed?: boolean;
    date: string;
}
export declare type RFA_RequestedTreatmentFields = Array<{
    diagnosis: string;
    icdCode: string;
    serviceRequested: string;
    cpt_hcpcsCode: string;
    otherInfo: string;
}>;
export interface RFA_UROResponseFields {
    approved?: boolean;
    deniedOrModified?: boolean;
    delay?: boolean;
    treatmentPreviouslyDenied?: boolean;
    liabilityForTreatmentDisputed?: boolean;
    authorizationNumber?: string;
    date?: string;
    authorizedAgentName?: string;
    signature?: boolean;
    phone?: string;
    fax?: string;
    email?: string;
    comments?: string;
}
