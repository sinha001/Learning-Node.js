const dbConnect = require('./mongodb');

const deleteData = async () =>{
    let db = await dbConnect();

    let result = await db.deleteOne(
        {
            name: 'M 40'
        }
    );

    if(result.acknowledged){
        console.warn("Data Deleted");
    }
};

deleteData();