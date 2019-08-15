export interface AddPaymentProps {
  classes: any
  location: any
}

export interface ConfirmationDialogProps {
  isOpen: boolean
  handleCloseConfirmationModal: () => void
  deletePaymentOption: (paymentOption: any) => void
  selectedPaymentToDelete: string | null
}

export interface UpdatePaymentProps {
  classes: any
  location: any
  id: string
}

export interface InitialValues {
  card_number?: string
  month?: string
  year?: string
  cvv_code?: string
  billing_first_name?: string
  billing_last_name?: string
  billing_address?: string
  billing_city?: string
  billing_state?: string
  billing_zip_code?: string
}

export interface PaymentMethodFormProps {
  onSubmit: (values: InitialValues) => void
  initialValues?: InitialValues
  submitting?: boolean
  submittingText?: string
  midLabel?: React.ReactNode
}

export interface UseAddPaymentInitialState {
  creating: boolean
  created: boolean
  createError: any
  creatingTimedOut: boolean
}

export interface UseAddPaymentAction {
  type:
    | 'creating'
    | 'created'
    | 'create-failed'
    | 'creating-timed-out'
    | 'set-payment-option'
  error?: any | null
  paymentOption?: any | null
}

export interface UseUpdatePaymentInitialState {
  updating: boolean
  updated: boolean
  updateError: any
  updatingTimedOut: boolean
  attempts: number
}

export interface UseUpdatePaymentAction {
  type:
    | 'updating'
    | 'updated'
    | 'update-failed'
    | 'updating-timed-out'
    | 'increment-attempts'
  error?: any | null
  count?: number
}

export interface UseUpdatePaymentArguments {
  timeout?: number
  id?: string
  location?: object
}
