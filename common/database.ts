
import { Db, MongoClient } from "mongodb";

let db: Db;
const initializeDbClient = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  console.log("  ✅  Connection to DB successful!");
  return client.db('portfolio');
};

const getDbClient = async () => {
  if (!db) {
    db = await initializeDbClient();
  }
  return db;
};

export default getDbClient;