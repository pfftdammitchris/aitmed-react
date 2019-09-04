declare const secureLs: {
    set: (key: string, data: string) => any;
    get: (key: string) => any;
    remove: (key: string) => any;
    clear: () => any;
    getAllKeys: () => any;
    removeAll: () => any;
    changeEncodingType: (encodingType: string) => any;
    createNewEncrypter: (...args: any[]) => any;
};
export default secureLs;
