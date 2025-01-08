const dbConnect = require("./mongodb");

async function insert() {
  const db = await dbConnect();
  /*
  insert single data...
  const result = await db.insertOne(
        [
            {name:'X50',brand:'Vivo',price: 35050,category: 'mobile'}
        ]
        );
    console.log(result);*/

  const result = await db.insertMany([
    { name: "X70", brand: "Vivo", price: 50500, category: "mobile" },
    { name: "F9 Pro", brand: "oppo", price: 21000, category: "mobile" },
    { name: "S23 FE", brand: "Samsung", price: 48200, category: "mobile" },
  ]);

  if (result.acknowledged) {
    console.warn("Data Inserted");
  }
}

insert();
