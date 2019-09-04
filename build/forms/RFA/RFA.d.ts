import React from 'react';
import { RFA_FormValues } from './types';
interface RFAProps {
    initialValues?: RFA_FormValues;
    specialties: string[];
    onSubmit: (values: RFA_FormValues) => Promise<void>;
}
declare const RFA: React.FC<RFAProps>;
export default RFA;
