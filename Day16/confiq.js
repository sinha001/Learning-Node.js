const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user:"root", //by default
    password: "", //by default
    database: "travel"
});

conn.connect((err)=>{
    if(err){
        console.warn(err);
    }else{
        console.warn("connected");
    }
});

module.exports = conn;