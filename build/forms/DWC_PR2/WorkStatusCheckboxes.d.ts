import React from 'react';
import { FieldProps } from 'react-final-form';
interface WorkStatusCheckboxesProps extends FieldProps<any, any> {
    input: {
        name: 'workStatusForPatient';
        value: {
            remainOffWorkUntil?: string;
            returnToModifiedWork?: {
                on?: string;
                limitations?: string;
            };
            returnToFullDuty?: {
                on?: string;
            };
        };
        onChange: (args: any) => void;
    };
    meta: any;
}
declare const WorkStatusCheckboxes: React.FC<WorkStatusCheckboxesProps>;
export default WorkStatusCheckboxes;
