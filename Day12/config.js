const mongoose = require('mongoose');

/* 
Define the connection URL for your MongoDB cluster. 
This URL includes:
   - Authentication (username: yourusername, password: yourpassword)
   - Cluster address (my-database.ie1dr.mongodb.net)
   - Database name (`e-comm`)
   - Additional query parameters for MongoDB Atlas configurations.
*/
const url =
  "mongodb+srv://<username>:<password>@my-database.ie1dr.mongodb.net/e-comm?retryWrites=true&w=majority&appName=My-Database";

/*
Connect to the MongoDB database using Mongoose.
The `mongoose.connect` method establishes a connection between your Node.js app and MongoDB.
*/  
mongoose.connect(url);