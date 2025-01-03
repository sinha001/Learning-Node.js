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
 */

// Root route (HomePage)
app.get('', (req, res) => {
    res.send("Hello, this is a HomePage"); // Sends a response to the client.
});

// About route
app.get('/about', (req, res) => {
    res.send("Hello, this is an AboutPage"); // Sends a response for the /about endpoint.
});

// help route
app.get('/help', (req, res) => {
    res.send("Hello, this is an HelpPage"); // Sends a response for the /about endpoint.
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

Expected Outputs:
- HomePage: "Hello, this is a HomePage"
- AboutPage: "Hello, this is an AboutPage"
*/
