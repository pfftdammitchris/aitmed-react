interface UseCheckboxesObjectized {
    options: string[];
    value: {
        [name: string]: string;
    };
    onChange: (value: {
        [name: string]: string;
    }) => void;
}
declare const useCheckboxesObjectized: ({ options, value, onChange, }: UseCheckboxesObjectized) => {
    onCheckboxChange: (name: string) => void;
    onTextChange: (name: string) => (e: any) => void;
    values: {
        [name: string]: string;
    };
    current?: string | undefined;
};
export default useCheckboxesObjectized;
