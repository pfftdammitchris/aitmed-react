declare const useObjectizedCheckboxes: ({ input }: any) => {
    nodes: any;
    onBlur: (key: string) => () => void;
    onChange: (key: string) => (e: any) => void;
    onKeyPress: (key: string) => (e: any) => void;
    onMountRef: any;
    getTextFieldProps: ({ name, ...rest }: {
        name: string;
    }) => {
        inputRef: any;
        onBlur: () => void;
        onKeyPress: (e: any) => void;
    };
};
export default useObjectizedCheckboxes;
