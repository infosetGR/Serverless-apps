const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {

    //replace = with %3D -- not needed
    const URL = process.env.MONGODB_URL;
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;//'serverless'
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;//'todos'

    const connection = await MongoClient.connect(URL)

    const todoCollection = connection.db(DATABASE_NAME)
        .collection(COLLECTION_NAME)
    const results = await todoCollection
        .find({ username: "fotis" })
        .toArray()

    await connection.close()
 
    return {
        body: JSON.stringify(results).replace(/_id/g, "id")
    };
}