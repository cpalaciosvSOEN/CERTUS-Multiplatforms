const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "BBDD";

const client = new MongoClient(uri);

async function connection() {
  await client.connect();
  const db = client.db(dbName);
  return db;
}

async function getLocations(type, name) {
  const db = await connection();
  const collection = db.collection("locations");
  const query = {};
  if (type) query.type = type;
  if (name) query.name = name;
  const locations = await collection
    .find({
      $or: [{ type: type }, { name: name }],
    })
    .toArray();
  return locations;
}

async function main() {
  const locations = await getLocations(2);
  console.log(locations);
}

main();
