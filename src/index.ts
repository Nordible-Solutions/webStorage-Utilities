/**
 * 
 * @param keyToFetch the key to fetch from the storagetype
 * @param expectedType the type of result expected e.g. string/object/array/boolean etc
 * @param storageType 1 - sessionStorage, 0 - localStorage (default if no option provided)
 */
export const fetchFromStorage = (keyToFetch: string, expectedType: any, storageType = 0, logging = false) => {
    let Storage = storageType === 1 ? sessionStorage : localStorage;
    try {
        if (storageType === 1) {
            return JSON.parse(Storage[keyToFetch]);
        }
        return JSON.parse(Storage[keyToFetch]);
    }
    catch (ex) {
        if (logging === true) {
            console.log(`An error occured while fetcing ${keyToFetch} from ${Storage}`);
        }
    }
    let Result;
    switch (expectedType) {
        case Array:
            Result = [];
            break;
        default:
            Result = null;
            break;
    }
    return Result;
}
