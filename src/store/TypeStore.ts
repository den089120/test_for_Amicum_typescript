
export interface TypeStore {
    dataStore: Record<string, string | number>;
    dataFunc: Record<string, Array<()=>void>>;
    getData: (data: string, fn:()=>void) => string | number;
    setData: (data: string, value: string | number) => void;
}