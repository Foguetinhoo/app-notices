'use strict'
const verifyNullOrUndefined = object => { 
    let cont = 0
    if (Object.keys(object).length === 0) return false;
    for(const property in object) {
        if (object.hasOwnProperty(object)) {
            const data = object[property];
            if (data === null || data === undefined) cont++   
        } 
    }
    if (cont > 0) return false;
    return true
}

export { verifyNullOrUndefined }