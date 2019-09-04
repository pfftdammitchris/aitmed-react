export interface InitialState {
    opened: boolean;
    data: any;
    context?: any;
}
export interface UseModalReturnType extends InitialState {
    open: ({ data, context }: any) => void;
    close: () => void;
}
declare const useModal: () => UseModalReturnType;
export default useModal;
