/*
1. Node js: Connect with MySQL--

-- Install MySQL npm package.
-- Connect node js and MySQL.
-- Get data from mysql
*/
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:"root", //by default
    password: "", //by default
    database: "travel"
});

connection.connect((err)=>{
    if(err){
        console.warn(error);
    }
    else{
        console.log("connected!!");
    }
});

connection.query("select * from users",(err,res)=>{
    console.warn(res);
});