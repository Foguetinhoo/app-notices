import { Find } from '../../../util/database/Find'
import { comparePassword, hashPassword } from '../../../util/function/encryptPassword'
import { verifyBody } from '../../../util/function/validBody'

const login = async (req, res) => {
    try {
        const validation = verifyBody(req.body)

        if (validation.type === 'error') return res.status(400).json(validation)

        const { email, password } = req.body

        if (!email || !password) return res.status(200).json({
            type: 'error',
            message: 'campos vazios'
        })
        const result = await Find('users', { email })

        if (result === false) {
            return res.status(200).json({
                type: 'error',
                message: 'email não cadastrado'
            })
        }
        if (!comparePassword(result.password, password)) {
            result.password = undefined
            return res.status(200).json({
                type: "success",
                result
            })
        }
        return res.status(203).json({
            type: "error",
            message:"senha incorreta"
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            type: 'error',
            message: err.message
        })
    }
}
export default login