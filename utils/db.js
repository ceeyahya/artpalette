import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectDB() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db('paintings');
  return { db, client };
}
