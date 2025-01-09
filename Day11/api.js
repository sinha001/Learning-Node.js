const express = require('express'); // Import Express for creating the server
const dbConnect = require('./config'); // Import the database connection function
const mongodb = require('mongodb'); // Import MongoDB for ObjectId handling
const app = express(); // Initialize an Express application

app.use(express.json()); // Middleware to parse JSON request bodies

// GET API: Fetch all data from the MongoDB collection
app.get('/', async (req, res) => {
    let data = await dbConnect(); // Connect to the database and get the collection
    data = await data.find().toArray(); // Retrieve all documents and convert them to an array
    res.send(data); // Send the array of documents as the response
});

// POST API: Insert a new document into the MongoDB collection
app.post('/', async (req, res) => {
    let data = await dbConnect(); // Connect to the database and get the collection
    let result = await data.insertOne(req.body); // Insert a new document using the request body data
    res.send(result); // Send the result of the insertion (e.g., acknowledgment and inserted ID)
});

// PUT API: Update a document based on the name field
app.put('/', async (req, res) => {
    let data = await dbConnect(); // Connect to the database and get the collection
    let result = await data.updateOne( // Update a single document
        { name: req.body.name }, // Match the document where the `name` matches the request body
        { $set: req.body } // Update the fields provided in the request body
    );
    res.send(result); // Send the result of the update operation
});

/* Alternate PUT API (commented out):
   Update a document based on the name provided as a query parameter.
   Example: PUT /:name -> Updates the document with the specified name.
*/
// app.put('/:name', async (req, res) => {
//     let data = await dbConnect(); // Connect to the database and get the collection
//     let result = await data.updateOne( // Update a single document
//         { name: req.params.name }, // Match the document where the `name` matches the URL parameter
//         { $set: req.body } // Update the fields provided in the request body
//     );
//     res.send(result); // Send the result of the update operation
// });

// DELETE API: Delete a document by its `_id`
app.delete('/:id', async (req, res) => {
    let data = await dbConnect(); // Connect to the database and get the collection
    let result = await data.deleteOne( // Delete a single document
        { _id: new mongodb.ObjectId(req.params.id) } // Match the document by its `_id` (converted to ObjectId)
    );
    res.send(result); // Send the result of the delete operation
    if (result.acknowledged) { // Check if the delete operation was acknowledged
        console.warn("Deleted!"); // Log a confirmation message to the console
    }
});

// Start the server on port 5000
app.listen(5000, () => {
    console.warn("Server is running on port 5000");
});
