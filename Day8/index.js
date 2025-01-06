/*
Express.js Example: Serve Static HTML Pages

1. Purpose:
   - This example demonstrates how to serve static HTML files using Express.js.
   - It creates a directory to store HTML files and serves them through the Express app.

2. Steps Breakdown:

   - `const express = require('express');`
     - This imports the Express module into the file. Express is a web framework for Node.js that simplifies handling HTTP requests, routing, and serving static files.

   - `const path = require('path');`
     - This imports the Node.js `path` module, which provides utilities for working with file and directory paths. It ensures that paths are correctly formatted across different operating systems.

   - `const app = express();`
     - This creates an instance of the Express application. The `app` variable represents your Express server, which you can use to configure routes, middleware, and other server settings.

   - `const publicPath = path.join(__dirname, 'public');`
     - This line defines the path to the directory where HTML files (and other static files) will be stored.
     - `__dirname` is a Node.js variable that provides the absolute path to the current directory where the script is located.
     - `path.join()` safely combines the current directory path (`__dirname`) with `'public'` to create an absolute path to the `public` folder.
     - The `public` folder is where you would place your HTML, CSS, JavaScript, images, or other assets.

   - `app.use(express.static(publicPath));`
     - This line tells the Express application to use `express.static()` middleware to serve static files.
     - `express.static(publicPath)` serves files from the `public` directory when requested by clients.
     - For example, if you put an `index.html` file inside the `public` folder, users can access it by visiting `http://localhost:5100/index.html`.
     
   - `app.listen(5100);`
     - This starts the Express server on port 5100. The server will listen for incoming HTTP requests at this port.
     - Once the server is running, you can open your browser and navigate to `http://localhost:5100` to access the static files from the `public` folder.

*/

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

//app.use(express.static(publicPath)); 



/*
3. Remove File Extensions from URLs:

   - `app.get('', (req, res) => { res.sendFile(`${publicPath}/index.html`); });`
     - This defines a route for the root URL (`/`).
     - When a client makes a request to the root URL (e.g., `http://localhost:5100/`), the server will respond with the `index.html` file.
     - By using `res.sendFile()`, the server sends the `index.html` file as a response to the client, without requiring the `.html` extension in the URL.
   
   - `app.get('/about', (req, res) => { res.sendFile(`${publicPath}/about.html`); });`
     - This defines a route for the `/about` URL.
     - When a client navigates to `http://localhost:5100/about`, the server responds with the `about.html` file from the `public` folder, without requiring the `.html` extension in the URL.

   - `app.get('*', (req, res) => { res.sendFile(`${publicPath}/404page.html`); });`
     - This is a wildcard route (`*`), which matches any URL that is not explicitly defined in the previous routes.
     - It acts as a fallback and handles requests to non-existent routes (e.g., `http://localhost:5100/nonexistent`).
     - When an invalid URL is accessed, the server responds with the `404page.html`, which can be a custom 404 error page.
   
4. Static File Handling (Commented Out):

   - The line `app.use(express.static(publicPath));` is commented out in this example.
     - Normally, this middleware would allow Express to serve static files from the `public` directory.
     - However, since we are specifically defining routes for each HTML file (e.g., `/`, `/about`), the `express.static()` middleware is not required in this scenario. Each route sends a specific file as a response.

5. Server Setup:

   - `app.listen(5100);`
     - This starts the Express server on port 5100. The server listens for incoming HTTP requests on this port.
     - After running the server, you can access the following URLs in your browser:
       - `http://localhost:5100/` will load the `index.html` file.
       - `http://localhost:5100/about` will load the `about.html` file.
       - Any unrecognized URL, such as `http://localhost:5100/nonexistent`, will show the `404page.html` file.
   
6. Summary:
   - This example demonstrates how to:
     - Serve static HTML files using Express.js.
     - Remove file extensions from the URL by defining explicit routes for HTML files.
     - Provide a custom 404 error page for invalid routes.
   - The approach allows for cleaner URLs by avoiding `.html` extensions and managing error pages effectively.

*/

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});




/*
Template Engine:
- What is template engine?
- install ejs template
- setup dynamic routing
- make dynamic pages

Dynamic Page:
- How to make Loop in ejs
- Make header file
- Show common header file

*/

app.get('/profile', (req, res) => {
    // Step 1: Create a data object to hold dynamic user information
    const data = {
        name: "Nishant Sinha", // User's name
        email: "sinhanishant046@gmail.com", // User's email address
        city: "Muzaffarpur", // User's city
        skills: ['php', 'js', 'c++', 'java', 'vue js', 'node.js'] // List of user's skills
    };

    // Step 2: Render the 'profile.ejs' template and pass the data object
    // 'profile' refers to the template file located in the 'views' directory (profile.ejs).
    // The 'data' object is passed to the template for dynamic content rendering.
    res.render('profile', { data });  
});


app.get('/login', (req, res) => {
    
    res.render('login');  // Render the profile.ejs template and pass the data
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404page.html`);
});

app.listen(5100,()=>{
    console.log("Server is listening: http://localhost:5100");
})
