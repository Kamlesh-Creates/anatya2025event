import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not defined');
  console.error('📝 Available env vars:', Object.keys(process.env).filter(key => key.includes('MONGO')));
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const uri = MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {

  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
 
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}


export default clientPromise;


export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db('anantya2025'); 
}

export async function getRegistrationsCollection() {
  const db = await getDatabase();
  return db.collection('registrations');
}
