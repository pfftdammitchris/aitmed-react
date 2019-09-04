import React from 'react';
interface DividerProps {
    classNames?: {
        root?: string;
        absolute?: string;
        inset?: string;
        light?: string;
        middle?: string;
    };
    margin?: string | number;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
