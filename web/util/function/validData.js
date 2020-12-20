const verifyNullOrUndefined = (object = []) => {
    for (const property in object) {
        if (object.hasOwnProperty.call(object, property)) {
            const data = object[property];
            if (data === null) return false;
        }
        return false;
    }
    return true;
}

module.exports = { verifyNullOrUndefined }