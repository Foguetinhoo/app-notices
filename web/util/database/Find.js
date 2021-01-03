import { connectToDatabase } from "../mongodb";

const sendData = query => {
    console.log(query)
    if (!query) {
        
    }
    // if (query.FindedCount > 0) {
    //     const { ops: [data] } = query
    //     return data;
    // };
    return false;
}
const Find = async (collection, find,search=0) => {
    try {
        const { db } = await connectToDatabase();

        let resultQuery;
        if (typeof find != 'object') return false;
       switch (search) {
            case 0:
                resultQuery = await db.collection(collection).findOne(find)
                if (!resultQuery) return false;
                return resultQuery  
           case 1:
               resultQuery = await db.collection(collection).find(find)
               if (!resultQuery) return false;
               return resultQuery  
           default:
               return 'opção inválida';
       }
    } catch (err) {
        throw err;
    }
}
export { Find }