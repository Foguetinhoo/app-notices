const { verifyNullOrUndefined } = require("../function/validData")
const verifyBody =  (req, res, next) => {
    try {
        if (typeof Object.entries(req.body) != 'object') return res.json({
            type: 'error',
            message: 'Corpo de requição invalido'
        })
        const result = verifyNullOrUndefined(Object.entries(req.body))
        if (!result) return res.json({
            type: 'error',
            message: 'campos invalidos'
        })
        return next()
    } catch (err) {
        console.log(err)
        return res.json({
            type: 'error',
            message: 'erro na aplicação'
        })
    }
}
module.exports =  verifyBody