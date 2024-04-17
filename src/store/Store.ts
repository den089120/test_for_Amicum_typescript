import {TypeStore} from "./TypeStore";

export class Store implements TypeStore {
    dataStore = {}
    dataFunc = {}
    constructor() {
    }

    setData (data: string, value: string | number) {
        this.dataStore[data] = value
    }
    getData (data: string, fn: () => void) {
        if (!this.dataFunc[data].include(fn)) this.dataFunc[data].push(fn)

        return  this.dataStore[data]
    }
}