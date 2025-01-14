/*
1. OS MODULE IN NODE.JS:
-- What is OS Module?
-- Important Functions of OS Module.
*/

const express = require('express');
const os = require('os');
const EventEmitter = require("events");

const app = express();

console.log(os.arch());
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));

console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());


/*
2. EVENTS & EVENT EMITTER IN NODE.JS:

-- What is Events & Event Emitter?
-- Make an event and call it. 
*/

//function to count the clicks..
const event = new EventEmitter();

let count = 1;
event.on("countAPI",()=>{
    console.log("event called!", count++);
})

app.get('/',(req,res)=>{
    res.send("API CALLED");
    event.emit("countAPI");
});

app.get('/search',(req,res)=>{
    res.send("SEARCH API CALLED");
});

app.get('/update',(req,res)=>{
    res.send("UPDATE API CALLED");
});


/*
3. REPL (READ-EVAL-PRINT-LOOP):

-- What is REPL?
   REPL is command-line tool to run node.js or javascript code.
-- Example of REPL.
*/

app.listen(5000, ()=> {
    console.log("server is running on port 5000");
});

