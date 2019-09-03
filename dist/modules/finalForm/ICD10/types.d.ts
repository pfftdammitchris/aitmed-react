export declare type ICD10ResultItem = {
    [code: string]: string;
};
export declare type UserICD10SearcherAction = {
    type: 'fetching';
} | {
    type: 'fetched';
    results: {
        codes: string[];
        results: any[];
        total: number;
    };
} | {
    type: 'fetch-failed';
    error: any;
} | {
    type: 'no-results';
};
export interface UserICD10SearcherState {
    fetching: boolean;
    fetched: boolean;
    fetchError: null | any;
    data: {
        codes: string[];
        results: any;
        total: number;
    };
}
