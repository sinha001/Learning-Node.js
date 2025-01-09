/*
1. MongoDB:
   - MongoDB is a NoSQL Database designed for unstructured or semi-structured data.
   - Data is stored in collections (equivalent to tables in relational databases).
   - Collections don't use rows and columns; instead, data is stored in the form of JSON-like documents (objects).
*/

/*
2. Connect Node.js with MongoDB:
   - Install MongoDB package: Use `npm install mongodb` to add the MongoDB driver to your project.
   - Connect MongoDB with Node.js: Establish a connection to the database using the MongoDB client.
   - Show data from MongoDB: Retrieve and display data using MongoDB query methods.
*/

// Import the `dbConnect` function from the local `mongodb.js` file
const dbConnect = require('./mongodb');

/*
   Example of fetching data using `then` method (commented out):
   - The `dbConnect` function connects to the MongoDB database.
   - Use the `.find()` method to retrieve all documents from a collection.
   - Convert the cursor to an array using `.toArray()` and log the data.
*/
/*
dbConnect().then((res) => {
    res.find().toArray().then((data) => {
        console.warn(data); // Logs the retrieved data
    });
});
*/

/*
The `main` function uses `async/await` for better readability and easier error handling.
*/
const main = async () => {
  /*
  Step 1: Connect to the MongoDB database by calling `dbConnect`.
  This function returns a reference to the target collection.
  */
  let data = await dbConnect();

  /*
  Step 2: Use the `find` method to retrieve all documents from the collection.
  Call `.toArray()` to convert the cursor to an array for easy manipulation.
  */
  data = await data.find({}).toArray();

  /*
  Step 3: Log the retrieved data to the console.
  */
  console.warn(data); // Displays all documents in the collection
};

// Call the `main` function to execute the database operations
main();

/*
Additional Information:
- The `main` function demonstrates a basic read operation (fetching data) using MongoDB.
- It is recommended to use `async/await` for better readability, especially for complex operations.

Next Steps: Understanding CRUD operations in MongoDB
- Create separate files for each operation to focus on their functionality:
  1. `insert.js`: Demonstrates how to insert data into the collection.
  2. `update.js`: Demonstrates how to update data in the collection.
  3. `delete.js`: Demonstrates how to delete data from the collection.
*/
