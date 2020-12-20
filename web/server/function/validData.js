const verifyNullOrUndefined = (arr = []) => {
    for (const key in arr) {
        if (arr.hasOwnProperty.call(arr, key)) {
            const element = arr[key];
            if (element === null) return false;
            
        }
    }
    return true;
}

module.exports = { verifyNullOrUndefined }