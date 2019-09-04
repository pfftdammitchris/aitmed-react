import React from 'react';
import { ICD10ResultItem } from './types';
interface ICD10SearchInputProps {
    codes: string[];
    results: any;
    total: number;
    onSelect: (args: any) => void;
    fetching: boolean;
    onInputValueChange: (args: any) => void;
    onStateChange: (args: any) => void;
    stringify: (results: ICD10ResultItem) => (code: string) => string;
    downshiftReducer: any;
    onKeyPress: (e: any) => void;
}
declare const ICD10SearchInput: React.FC<ICD10SearchInputProps>;
export default ICD10SearchInput;
