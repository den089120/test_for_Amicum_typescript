import {dataFuncType, dataStoreType, TypeStore} from "./TypeStore";

export class Store implements TypeStore {
    dataStore:dataStoreType = {'':''}
    dataFunc:dataFuncType = {'': [()=>{}] }
    constructor() {
    }

    setData (data: string, value: string | number) {
        this.dataStore[data] = value
    }
    getData (data: string, fn: () => void) {

        if (!this.dataFunc[data]) this.dataFunc[data].push(fn) // add includes

        return  this.dataStore[data]
    }
}