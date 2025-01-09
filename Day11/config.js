const { MongoClient } = require("mongodb");

// - Authentication (username: yourusername, password: yourpassword)

const url =
  "mongodb+srv://<username>:<password>@my-database.ie1dr.mongodb.net/?retryWrites=true&w=majority&appName=My-Database";
const database = "e-comm";

const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    let result = await client.connect();
    db = result.db(database);
    return db.collection("products");
  } catch {
    console.dir;
  }
};

module.exports = dbConnect;
