declare const useObjectizedCheckboxes: ({ input }: any) => {
    nodes: {};
    onBlur: (key: string) => () => void;
    onChange: (key: string) => (e: any) => void;
    onKeyPress: (key: string) => (e: any) => void;
    onMountRef: (key: string) => (e: any) => void;
    getTextFieldProps: ({ name, ...rest }: {
        name: string;
    }) => {
        inputRef: (e: any) => void;
        onBlur: () => void;
        onKeyPress: (e: any) => void;
    };
};
export default useObjectizedCheckboxes;
