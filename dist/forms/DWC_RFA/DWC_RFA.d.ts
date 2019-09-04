import React from 'react';
import { RFA_FormValues } from './types';
interface RFAProps {
    initialValues?: RFA_FormValues;
    specialties: string[];
    onSubmit: (values: RFA_FormValues) => Promise<void>;
    render: (args: any) => any;
}
declare const DWC_RFA: React.FC<RFAProps>;
export default DWC_RFA;
