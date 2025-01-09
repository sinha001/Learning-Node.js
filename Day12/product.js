const mongoose = require('mongoose');

/*
Define a Schema using `mongoose.Schema`.
A schema defines the structure of the documents in a MongoDB collection.
In this case, the `ProductSchema` specifies the structure for `products` documents:
    - `name`: String
    - `brand`: String
    - `price`: Number
    - `category`: String
*/
const ProductSchema = new mongoose.Schema({
    name: String,      // Product name
    brand: String,     // Product brand
    price: Number,     // Product price
    category: String,  // Product category
});

module.exports = mongoose.model('products', ProductSchema);