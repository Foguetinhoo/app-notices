import { verifyNullOrUndefined } from "./validData"
const verifyBody = body => {
    try {
    
        if (typeof body != 'object') return {
            type: 'error',
            message: 'Corpo de requição invalido'
        }

        if (body.length == 0) return {
            type: 'error',
            message: 'Corpo de requição vazio'
        }
        const result = verifyNullOrUndefined(body)

        if (!result) return {
            type: 'error',
            message: 'campos invalidos'
        }
        return {
            type: "success",
            message:"ok"
        };
    } catch (err) {
        console.log(err)
        return res.json({
            type: 'error',
            message: 'erro na aplicação'
        })
    }
}
export { verifyBody }