import React from 'react';
interface DWC_PR2Props {
    initialValues?: any;
    genders: string[];
    specialties: string[];
    onSubmit: (values: any) => Promise<void>;
}
declare const PR2: React.FC<DWC_PR2Props>;
export default PR2;
