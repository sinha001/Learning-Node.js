/*
Express.js Example: Render HTML & JSON

1. Purpose:
   - Demonstrate how to render HTML, JSON, and link pages using Express.js.
   - Showcase the usage of query parameters and how to dynamically handle input.

2. Server setup:
   - The app listens on port 4000 and serves three routes:
     - `/` (HomePage)
     - `/about` (About Page)
     - `/help` (Help Page)
*/

const express = require('express'); // Import the Express.js module.
const app = express(); // Create an instance of an Express application.

/*
Route: HomePage ('/')
Description:
- Renders basic HTML with an <h1> tag and two links:
  - One to the About Page (/about).
  - One to the Help Page (/help).
- These links demonstrate navigation between routes.
*/
app.get("", (req, res) => {
    res.send(`
        <h1>this is a homepage</h1> <!-- Heading displayed on the page -->
        <a href="/about">About: Render Input tag</a></br> <!-- Link to the About Page -->
        <a href="/help">Help: Render Json</a> <!-- Link to the Help Page -->
    `);
});

/*
Route: About Page ('/about')
Description:
- Renders an input field and a button.
- If a query parameter `name` is passed in the URL (e.g., /about?name=Nishant),
  it pre-fills the input field with that value.
- Includes a link back to the HomePage.
How to use:
- Visit the URL with a query parameter, e.g., /about?name=Nishant.
  The input field will display: value=Nishant.
*/
app.get("/about", (req, res) => {
    res.send(`
        <input type="text" placeholder="username" value=${req.query.name || ''} /> <!-- Input field with dynamic value -->
        <button>Click me!!!</button> <!-- Button for interactivity -->
        <br/>
        <a href="/">go to homepage</a> <!-- Link to return to the HomePage -->
    `);
});

/*
Route: Help Page ('/help')
Description:
- Sends a JSON response containing an array of user objects.
- Demonstrates how to send JSON data in an Express.js route.
JSON Data:
[
    { name: 'nishant', email: 'nishantsinha.referral@gmail.com' },
    { name: 'arushi', email: 'arusisingh01@gmail.com' }
]
How to use:
- Visit the URL /help to see the JSON data rendered in the browser.
*/
app.get("/help", (req, res) => {
    res.send([
        {
            name: 'nishant', // First user object with name and email fields
            email: 'nishantsinha.referral@gmail.com'
        },
        {
            name: 'arushi', // Second user object with name and email fields
            email: 'arusisingh01@gmail.com'
        }
    ]);
});

/*
Start the server:
- The application listens on port 4000.
- Open the browser and navigate to:
  - `http://localhost:4000` for the HomePage.
  - `http://localhost:4000/about` for the About Page.
  - `http://localhost:4000/help` for the Help Page.
*/
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
