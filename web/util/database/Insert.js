import { connectToDatabase } from "../mongodb";

const Insert = async (collection, data,find=null) => {
    try {
        const { db } = await connectToDatabase();

        let resultQuery;

        if (find != null) {
            resultQuery = await db.collection(collection).findOne(find)
            if (resultQuery) return false;
        } 
        
        resultQuery = await db.collection(collection).insertOne(data)
        if (resultQuery.insertedCount > 0) {
            const { ops:[data] } = resultQuery
            return data;
        };
    } catch (err) {
        throw err;
    }
}
export {Insert}