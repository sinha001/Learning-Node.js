/*
1. Upload File in Node JS:
-- Install Multer npm package.
-- Make Router for upload file.
-- Write code for upload file.

*/

const express = require('express');
const multer = require('multer');

const app = express();

//Upload png image via postman
const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,callback){
            callback(null,"uploads");
        },
        filename: function(req,file,callback){
            callback(null, file.fieldname + "-" + Date.now()+ ".png");
        }
    })
}).single("user_file");

app.post('/upload', upload, (req,res) => {
    res.send("File upload");
});

app.listen(5500,()=>{
    console.warn("Server is running on port 5500");
});