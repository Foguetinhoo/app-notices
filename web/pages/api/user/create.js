import { Insert } from '../../../util/database/Insert'
import { hashPassword } from '../../../util/function/encryptPassword'
import { verifyBody } from '../../../util/function/validBody'

const create = async (req, res) => { 
    try {
        const validation = verifyBody(req.body)

        if (validation.type === 'error') return res.status(400).json(validation)  
        const { email, password: pass, name } = req.body
        
        const newPassword = await hashPassword(pass)
        
        const body = {
            name,
            email,
            password: newPassword
        }

        const result = await Insert('users', body, { email })

        if (result === false) {
            return res.status(200).json({
                type: 'success',
                message: 'email já cadastrado no sistema'
            })
        }

        return res.status(201).json({
            type: "success",
            message: "usuario criado com  sucesso",
            result
        })
    } catch (err) {
        return res.status(400).json({
            type: 'error',
            message: err
        })
    }
}
export default create