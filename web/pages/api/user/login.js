import { Find } from '../../../util/database/Find'
import { verifyBody } from '../../../util/function/validBody'

const login = async (req, res) => {
    try {
        const validation = verifyBody(req.body)

        if (validation.type === 'error') return res.status(400).json(validation)

        const { email, password } = req.body
        
        if (!email || password) return res.status(200).json({
            type: 'error',
            message: 'campos vazios'
        })

        const result = await Find('users', { email })
        console.log(result)
        if (result === false) {
            return res.status(200).json({
                type: 'error',
                message: 'email não cadastrado no sistema'
            })
        }

        return res.status(200).json({
            type: "success",
            result
        })
    } catch (err) {
        return res.status(400).json({
            type: 'error',
            message: err
        })
    }
}
export default login