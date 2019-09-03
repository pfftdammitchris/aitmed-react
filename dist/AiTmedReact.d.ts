import React from 'react';
interface LibraryProps {
    theme?: any;
    env?: 'testapi' | 'api';
}
export interface ContextState {
    env?: 'testapi' | 'api';
    baseUrl: string;
}
export declare const AiTmedContext: React.Context<ContextState>;
declare const AiTmedReact: React.FC<LibraryProps>;
export default AiTmedReact;
