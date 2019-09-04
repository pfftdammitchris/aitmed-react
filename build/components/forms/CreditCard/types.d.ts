/// <reference types="react" />
import { CreditCard } from '../../../types';
export interface AddPaymentProps {
    classes: any;
    location: any;
}
export interface ConfirmationDialogProps {
    isOpen: boolean;
    handleCloseConfirmationModal: () => void;
    deletePaymentOption: (paymentOption: any) => void;
    selectedPaymentToDelete: string | null;
}
export interface UpdatePaymentProps {
    classes: any;
    location: any;
    id: string;
}
export declare type InitialValues = CreditCard;
export interface PaymentCardsAnimationProps {
    activeField?: string;
    values: InitialValues;
}
export interface CreditCardProps {
    onSubmit: (values: InitialValues) => void;
    render: ({ fields, formApi, Form, Cards }: any) => React.ReactNode;
    initialValues?: InitialValues;
    submitting?: boolean;
    submittingText?: string;
    midLabel?: React.ReactNode;
    renderSubmit?: (formApi: any) => React.ReactNode;
    renderTextField?: (any: any) => React.ReactNode;
    renderSelectField?: (any: any) => React.ReactNode;
}
export interface UseAddPaymentInitialState {
    creating: boolean;
    created: boolean;
    createError: any;
    creatingTimedOut: boolean;
}
export interface UseAddPaymentAction {
    type: 'creating' | 'created' | 'create-failed' | 'creating-timed-out' | 'set-payment-option';
    error?: any | null;
    paymentOption?: any | null;
}
export interface UseUpdatePaymentInitialState {
    updating: boolean;
    updated: boolean;
    updateError: any;
    updatingTimedOut: boolean;
    attempts: number;
}
export interface UseUpdatePaymentAction {
    type: 'updating' | 'updated' | 'update-failed' | 'updating-timed-out' | 'increment-attempts';
    error?: any | null;
    count?: number;
}
export interface UseUpdatePaymentArguments {
    timeout?: number;
    id?: string;
    location?: object;
}
