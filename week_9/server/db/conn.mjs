import { MongoClient } from "mongodb";

let client = null;
let db = null;

export async function connectToDatabase() {
  if (db) return db;

  const uri = process.env.ATLAS_URI;
  if (!uri) {
    throw new Error("ATLAS_URI is not defined in .env");
  }

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(process.env.DB_NAME || "blog_db");
  console.log("Connected to MongoDB");
  return db;
}

export function getDb() {
  if (!db) throw new Error("Database not connected. Call connectToDatabase first.");
  return db;
}

export async function closeDatabase() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
