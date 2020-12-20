import { verifyBody } from '../../../util/function/validBody'
import { connectToDatabase } from '../../../util/mongodb'

const create = async (req, res,next) => {
    try {
        console.log(verifyBody(req.body))
        if (typeof verifyBody(req.body) != 'boolean') {
            const response = verifyBody(req.body)
            return res.status(400).json(response)
        }
        const { db } = await connectToDatabase()

        const result = await db.collection("users").insertOne(req.body)

        if (result.insertedCount > 0) return res.status(201).json({ 
            type: 'success',
            message: 'ok'
        })

        return res.status(400).json({
            type: 'error',
            message: ''
        })
    } catch (err) {
        return res.status(400).json({ type: 'error', message: err})
    }
}
export default create