const { MongoClient } = require("mongodb");

//const MongoClient = require('mongodb).MongoClient;

const url =
  "mongodb+srv://sinha001:bangbang123@my-database.ie1dr.mongodb.net/?retryWrites=true&w=majority&appName=My-Database";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    let result = await client.connect();
    db = result.db(database);
    return db.collection("products");
    // let response = await collection.find({}).toArray();

    // //let response = await collection.find({name:'A30'}).toArray();
    // console.log(response);
  } 
  catch{
    console.dir;
  }
}

module.exports = dbConnect;