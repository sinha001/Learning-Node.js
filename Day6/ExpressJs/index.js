/*
Express.js:

1. What is Express.js?
   - Express.js is a minimal and flexible Node.js web application framework.
   - It provides a robust set of features to develop web and mobile applications.
   - It simplifies server creation by handling routing, middleware, and HTTP requests/responses.

2. Install Express.js:
   - Make sure Node.js is installed on your system.
   - Use the following command to install Express.js:
     ```
     npm install express
     ```
   - This will add Express.js to your project as a dependency.
*/

const express = require('express'); // Import the Express.js module.
const app = express(); // Create an instance of an Express application.

/**
 * Set up routes:
 * - `app.get()` defines a route for handling HTTP GET requests.
 * - The first argument is the route path (URL endpoint).
 * - The second argument is a callback function with `req` (request) and `res` (response) objects.
 * 
 * Understanding `req` and `res`:
 * - `req` (request): Represents the HTTP request from the client. It contains information like:
 *      - URL parameters, headers, and query strings.
 *      - The body of POST/PUT requests.
 * - `res` (response): Represents the HTTP response that the server sends back to the client. It contains methods like:
 *      - `res.send()`: Send a response to the client.
 *      - `res.json()`: Send a JSON response.
 *      - `res.status()`: Set the HTTP status code.
 */

// Root route (HomePage)
app.get('', (req, res) => {
    // Example: Access request information from query parameters
    console.log("Request received at '/' with headers:", req.headers);
    console.log(req.query.name); // Logs the value of the 'name' query parameter from the request.

    // Construct a dynamic response based on query parameters
    res.send("Hello " + req.query.name + ", this is a HomePage");
});


// About route
app.get('/about', (req, res) => {
    // Example: Log the client's request method and URL
    console.log("Request Method:", req.method, "Request URL:", req.url);

    // Send response back to the client
    res.send("Hello, this is an AboutPage");
});

// Help route
app.get('/help', (req, res) => {
    // Example: Extract query parameters from the request (e.g., ?name=John)
    const query = req.query; // req.query is an object containing query parameters
    console.log("Query Parameters:", query);

    // Construct a response based on the query parameters
    if (query.name) {
        res.send(`Hello ${query.name}, this is the HelpPage`);
    } else {
        res.send("Hello, this is a HelpPage");
    }
});

/**
 * Start the server:
 * - `app.listen()` starts the server on the specified port (4200 in this case).
 * - The server listens for incoming requests and routes them based on the defined endpoints.
 */
app.listen(4200, () => {
    console.log("Server is running on http://localhost:4200");
});

/*
Steps to Test the Application:
1. Save the code in a file (e.g., `server.js`).
2. Run the application using the command: `node server.js`.
3. Open a browser and navigate to:
   - `http://localhost:4200` for the HomePage.
   - `http://localhost:4200/about` for the AboutPage.
   - `http://localhost:4200/help` for the HelpPage.

   For the HelpPage, try adding a query parameter:
   - Example: `http://localhost:4200/help?name=John`
   - Expected output: "Hello John, this is the HelpPage".

Understanding `req` and `res`:
- `req` is used to read incoming client data (e.g., headers, query parameters, request body).
- `res` is used to send the response from the server to the client.
*/


