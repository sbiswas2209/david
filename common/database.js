import { MongoClient } from "mongodb";

let db;
const initializeDbClient = async() => {
    const client = await MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ignoreUndefined: true,
    });
    console.log("  ✅  Connection to DB successful!");
    return client.db('portfolio');
};

module.exports = async() => {
    if (!db) {
        db = await initializeDbClient();
    }
    return db;
};