import React from 'react';
import { ICD10ResultItem } from './types';
interface ICD10PopupMenuProps {
    isOpen: boolean;
    codes: string[];
    results: ICD10ResultItem[];
    total: number;
    inputValue: string;
    getMenuProps: Function;
    getItemProps: Function;
    highlightedIndex: number | null;
}
declare const ICD10PopupMenu: React.FC<ICD10PopupMenuProps>;
export default ICD10PopupMenu;
