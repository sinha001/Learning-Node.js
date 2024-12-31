/*
    Create a Simple API:
    - Set up a server.
    - Define the header and API body.
    - Create an API that serves static data.
    - Store the data in another file.
*/

const http = require('http');  // Importing the HTTP module to create the server
const data = require('./data');  // Importing data from another file

// Creating an HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });  // Setting response header as JSON
    res.write(JSON.stringify(data));  // Converting data to JSON format and sending as response
    res.end();  // Ending the response
}).listen(5000);  // Server listens on port 5000

/*
** Testing the API using Postman:
    - Make sure your server is running.
    - Open Postman and create a new GET request.
    - Enter the URL: `http://localhost:5000/` (this is the API endpoint).
    - Click the "Send" button to make the request.
    - If the server is working correctly, you should receive the following JSON data as the response:
    
    [
        { "name": "Nishant Sinha", "email": "sinhanishant046@gmail.com" },
        { "name": "Rahul Sharma", "email": "rahul.sharma123@gmail.com" },
        { "name": "Pooja Verma", "email": "pooja.verma456@yahoo.com" },
        { "name": "Ankit Mehta", "email": "ankit.mehta789@hotmail.com" }
    ]
    
    - Ensure the status code is `200 OK`, indicating the server is working properly.
*/

/*
Input from Command Line:
    - Get input from the command line using `process.argv[3]`
    - Create a file with the given input data
    - Delete a file using the input from the command line
*/

const fs = require('fs');  // Importing the File System module

const input = process.argv;  // Storing command line arguments

/*
Command Line Input:
- To create a file using the command line:
  `node index.js add <filename> <content>`
- To delete a file using the command line:
  `node index.js remove <filename>`
*/

if (input[2] === 'add') {
    fs.writeFileSync(input[3], input[4]);  // Creating the file with the provided content
    console.log(`File '${input[3]}' has been created.`);  // Displaying a success message
} else if (input[2] === 'remove') {
    fs.unlinkSync(input[3]);  // Deleting the file
    console.log(`File '${input[3]}' has been deleted.`);  // Displaying a success message
} else {
    console.log("Invalid command. Please use 'add' to create a file or 'remove' to delete one.");  // Handling invalid input
}
