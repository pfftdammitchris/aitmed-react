export declare function formatOnlyLetters(val: string): string;
export declare function formatOnlyNumbers(val: string): string;
export declare function parsePhone(val: string): string;
export declare function parseSSN(val: string): string;
export declare const validate: {
    NPI(str: string): "NPI cannot exceed 32 characters" | undefined;
};
