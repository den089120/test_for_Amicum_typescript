export type dataStoreType = {
    [index: string]: string | number;
}
export type dataFuncType = {
    [index: string]: Array<(()=>void)>;
}


export interface TypeStore {
    dataStore: dataStoreType;
    dataFunc: dataFuncType;
    getData: (data: string, fn:()=>void) => string | number;
    setData: (data: string, value: string | number) => void;
}