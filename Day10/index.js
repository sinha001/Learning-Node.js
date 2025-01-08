/*
1. MongoDB:
- MongoBD is a NoSql Database.
- The data stored in a collection.
- Collection don't have row and columns.
- Data is stored in the form of object.


2. Connect Node with MongoDB:
- Install MongoDB package
- Connect MongoDB with Node.js
- Show data from MongoDB.
*/

const dbConnect = require('./mongodb');

/*dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.warn(data);
    });
});*/

 const main = async () =>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.warn(data);
};

main()

//Let's understand Crud operation by creating separate file to understand how its working..
/*
    1. insert.js: clearing insert data concept,
    2. update.js: clearing the update data concept,
    3. delete.js: clearing the delete data concept using node.js
*/