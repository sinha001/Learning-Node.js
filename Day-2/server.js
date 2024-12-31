const http = require('http'); // Importing the HTTP module to handle server requests and responses.
const colors = require('colors'); // Importing the 'colors' package for adding colors to console output.

console.log('hello'.green); // Displays "hello" in green color in the console.

/*
Function to handle requests and responses:

function dataControl(req, res) {
    res.write("<h2>Hello, This is Nishant Sinha</h2>");
    res.end();
}

// Creating an HTTP server using the function above.
// http.createServer(dataControl).listen(4500);
*/

// Creating an HTTP server using an inline function (arrow function).
http.createServer((req, res) => {
    res.write("<h1>Hello, This is Nishant Sinha</h1>");
    res.end();
}).listen(4500); // The server listens on port 4500.

/*
**Explanation of `package.json`:**
- It stores detailed information about your project, including the dependencies and their versions.
- If deleted accidentally, you lose track of the dependencies and their versions.
- If the `node_modules` folder is deleted accidentally, run `npm install` in the terminal. This will reinstall all the dependencies mentioned in `package.json`.

**Nodemon Usage:**
- When you use `node` to run a file (e.g., `node .\server.js`), you must restart the server manually after making changes. This is time-consuming.
- Solution: Install Nodemon globally with `npm i nodemon -g`.
- Run the file using `nodemon .\server.js`. Nodemon automatically restarts the server when you save changes.

**Asynchronous Nature of Node.js:**
- Node.js is asynchronous, meaning it doesn't wait for a task to complete before moving on to the next. For example:
    1. Executes the first script.
    2. Starts processing the second script (e.g., a complex task) but doesn't wait for it to finish.
    3. Moves on to execute the third script.
    4. Continues executing other tasks in the sequence.
*/
