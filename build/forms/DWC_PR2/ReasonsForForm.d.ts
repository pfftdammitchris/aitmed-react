import React from 'react';
interface ReasonsForFormProps {
    input: {
        value: {
            [reason: string]: string;
        };
        onChange: (value: {
            [reason: string]: string;
        }) => void;
    };
    meta?: any;
    withTextfields: string[];
}
declare const ReasonsForForm: React.FC<ReasonsForFormProps>;
export default ReasonsForForm;
