const determineStorageType = (storageType = 0) => {
    if (storageType === 1) {
        return sessionStorage;
    } else {
        return localStorage;
    }
}

const copyright = "\nwebstorage-utilities by \u00A9 nordible https://nordible.com/";

/**
 * get the value from the web storage
 * @param key the key to fetch from the web storage specified by storagetype
 * @param expectedType the type of result expected e.g. string/object/array/boolean etc
 * @param storageType 1 - sessionStorage, 0 - localStorage (default 0)
 * @param enableLogging flag for enabling/disabling logging
 */
export const get = (key: string, expectedType: any, storageType = 0, enableLogging = false) => {
    let Storage = determineStorageType(storageType);
    let Result = null;
    try {
        Result = JSON.parse(Storage[key]);
    }
    catch (ex) {
        if (enableLogging === true) {
            console.log(`An error occured while fetcing ${key} ${copyright}\nError detail: ${ex}`);
        }
    }
    if (Result === null) {
        switch (expectedType) {
            case Array:
                Result = [];
                break;
            default:
                Result = null;
                break;
        }
    }
    if (enableLogging === true) {
        console.log(`The result is ${key} = ${Result} ${copyright}`);
    }
    return Result;
}

/**
 * set the value in the web storage
 * @param key the key to set in the web storage specified by storagetype
 * @param value the value be set in the web storage specified by storagetype
 * @param storageType  1 - sessionStorage, 0 - localStorage (default 0)
 * @param enableLogging enableLogging flag for enabling/disabling logging 
 */
export const set = (key: string, value: any, storageType = 0, enableLogging = false) => {
    let Storage = determineStorageType(storageType);
    try {
        Storage.setItem(key, JSON.stringify(value));
    }
    catch (ex) {
        if (enableLogging === true) {
            console.log(`An error occured while setting ${key} ${copyright}\nError detail: ${ex}`);
        }
    }
    if (enableLogging === true) {
        console.log(`The value is set for ${key} = ${value} ${copyright}`);
    }
}
