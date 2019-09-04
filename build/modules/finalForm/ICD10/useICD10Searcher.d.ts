import { ICD10ResultItem } from './types';
declare const useICD10Searcher: ({ fields }: {
    fields: any;
}) => {
    onSearch: (keyword: string, downshift: any) => void;
    onSelect: (code: string, downshift: any) => void;
    onKeyPress: (e: any) => void;
    stringify: (results: ICD10ResultItem) => (code: string) => string;
    downshiftReducer: (_: any, changes: any) => any;
    fetching: boolean;
    fetched: boolean;
    fetchError: any;
    data: {
        codes: string[];
        results: any;
        total: number;
    };
};
export default useICD10Searcher;
