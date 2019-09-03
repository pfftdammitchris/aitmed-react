import React from 'react';
import { DWC_1FormValues } from './types';
interface DWC_PR1Props {
    initialValues?: DWC_1FormValues;
    states: string[];
    onSubmit: (values: DWC_1FormValues) => Promise<void>;
}
declare const DWC_PR1: React.FC<DWC_PR1Props>;
export default DWC_PR1;
