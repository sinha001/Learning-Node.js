const dbConnect = require('./mongodb');

const updateData = async () =>{
    let db = await dbConnect();
    let result = await db.updateOne(
        {name: 'F9 Pro', name: 'F1s Pro'},
        {$set: {name : 'F1s Pro', price: 25000}}
    );

    if(result.acknowledged){
        console.warn("Data Updated");
    }
};

updateData();