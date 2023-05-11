import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_URI);
const database = client.db(process.env.DB_NAME);

export default database;
