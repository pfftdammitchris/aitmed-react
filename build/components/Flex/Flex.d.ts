import React from 'react';
interface Props {
    center?: boolean;
    flexStart?: boolean;
    flexEnd?: boolean;
    flexGrow?: number;
    flexDirection?: 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse';
    flexWrap?: 'nowrap' | 'wrap';
    spaceBetween?: boolean;
    spaceAround?: boolean;
    style?: React.CSSProperties;
    textAlign?: 'left' | 'center' | 'right';
    wrap?: boolean;
    xsBlock?: boolean;
}
declare const Flex: React.FC<Props>;
export default Flex;
