import { MongoClient } from "mongodb";
import config from "../../config";

import type { Db } from 'mongodb';

let _cached: Db | null = null;

export async function getDatabase() {
    if (_cached) return _cached;
    const client = new MongoClient(config.database.mongoUri);
    await client.connect();
    _cached = client.db(config.database.dbName);
    return _cached;
}

export async function getCollection(colName: string) {
    const db = await getDatabase();
    return db.collection(colName);
}