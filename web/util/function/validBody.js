const { verifyNullOrUndefined } = require("./validData")
const verifyBody =  body => {
    try {
        if (typeof Object.entries(body) != 'object') return {
            type: 'error',
            message: 'Corpo de requição invalido'
        }
        if (Object.entries(body).length == 0) return {
            type: 'error',
            message: 'Corpo de requição vazio'
        }
        const result = verifyNullOrUndefined(Object.entries(body))

        if (!result) return {
            type: 'error',
            message: 'campos invalidos'
        }
        return true;
    } catch (err) {
        console.log(err)
        return res.json({
            type: 'error',
            message: 'erro na aplicação'
        })
    }
}
export { verifyBody }