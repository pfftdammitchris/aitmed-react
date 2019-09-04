import React from 'react';
import { DWC_1FormValues } from './types';
interface DWC_1Props {
    initialValues?: DWC_1FormValues;
    states: string[];
    onSubmit: (values: DWC_1FormValues) => Promise<void>;
}
declare const DWC_1: React.FC<DWC_1Props>;
export default DWC_1;
