/*
1. Node js: GET, POST, PUT, DELETE API -- MYSQL
*/
const express = require('express');
const conn = require('./confiq');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    conn.query("select * from users",(err,result)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    });
});

app.post('/',(req,res)=>{
    /*const data = {
        email: "sinhasonu066@gmail.com",
        username: "SonuSinha01",
        password: "123785456",
        role: "admin"
    }*/
 
        //data via postman body..
    conn.query("insert into users SET ? ", req.body, (err,result,fields)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    });
});

app.put('/',(req,res)=>{
    //static data updation...
    const data = ["ssinu01", "4545778", "teacher", 8];

    conn.query("update users SET username=?, password=?, role=? where id = ?", data, (err,result,field)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    });
});

//dynamically update using  id
app.put('/:id',(req,res)=>{
    //static data updation...
    const data = [req.body.username, req.body.password, req.body.admin, req.params.id];

    conn.query("update users SET username=?, password=?, role=? where id = ?", data, (err,result,field)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    });
});

app.delete('/:id',(req,res)=>{
    conn.query(`delete from users where id = ${req.params.id}`,(err,result,field)=>{
        if(err){
            throw err;
        }
        else{
            res.send(result);
        }
    });
});

app.listen("5000",()=>{
    console.warn("server is running on port 5000");
});