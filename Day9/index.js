/*
1. Middleware:
-- What are Middleware?
-- How to make a middleware?
-- Apply Middleware on routes
-- Type of Middleware
*/


// Importing the middleware function defined in another file (middleware.js).
const reqFilter = require('./middleware');

// Importing the Express library to create the server and handle routes.
const express = require("express");

// Creating an instance of an Express application.
const app = express();

// Creating a router instance to handle grouped routes.
const route = express.Router();

/* 
Application-level middleware:
- Middleware that is applied to the entire application using `app.use()`.
- The function checks if the `age` query parameter is provided and meets specific conditions.
- If no `age` is provided or if the age is less than 18, it sends a response and stops further execution.
- Otherwise, it calls `next()` to pass control to the next middleware or route handler.
- This middleware is moved to another file for better organization.
*/

// route.use(reqFilter): Attaching the middleware to the router for all routes defined under it.
route.use(reqFilter);

// Defining a route for the home page.
// When a user visits the "/" route, the server responds with "Welcome to Home Page".
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// Defining a route for the users page.
// When a user visits the "/users" route, the server responds with "Welcome to User Page".
app.get("/users", (req, res) => {
  res.send("Welcome to User Page");
});

/*
Types of Middleware:
1. Application-level Middleware: Applied globally using `app.use()`.
2. Router-level Middleware: Applied specifically to a router instance using `router.use()`.
3. Error-handling Middleware: Handles errors in the application, defined with 4 parameters (err, req, res, next).
4. Built-in Middleware: Provided by Express.js, e.g., `express.json()` and `express.urlencoded()`.
5. Third-party Middleware: Middleware from external libraries, e.g., `body-parser`, `cors`.
*/

/*
Route Level Middleware:
- Middleware applied to specific routes or groups of routes.
- Example: `route.use(reqFilter)` applies the middleware to all routes defined in `route`.
- Middleware can be defined in a separate file and imported into the main file for modularity.
- Middleware can also be applied individually to a single route.
*/

// Defining a route for the "about" page.
// The server responds with "This is About Page" when this route is accessed.
route.get('/about', (req, res) => {
    res.send("This is About Page");
});

// Defining a route for the "contact" page.
// The server responds with "Nishant Sinha - Contact me" when this route is accessed.
route.get('/contact', (req, res) => {
    res.send("Nishant Sinha - Contact me");
});

// Using the router with the base path '/'.
// All routes defined in the router will be prefixed with '/'.
app.use('/', route);

// Starting the server on port 5100 and logging a message to indicate that the server is running.
app.listen(5100, () => {
    console.warn("server is running on http://localhost:5100/");
});