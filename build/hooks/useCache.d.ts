declare const useCache: (initialCache?: {}) => {
    cache: {};
    cacheValue: (key: string, value: any) => void;
    onMountRef: (key: string) => (e: any) => void;
};
export default useCache;
