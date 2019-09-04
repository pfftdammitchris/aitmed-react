import React from 'react';
interface RowRendererProps {
    name: string;
    index: number;
    onDelete: (args: any) => void;
    highlightField: (args: any) => void;
    isHighlighted: boolean;
}
declare const EnhancedICD10RowRenderer: React.NamedExoticComponent<RowRendererProps>;
export default EnhancedICD10RowRenderer;
