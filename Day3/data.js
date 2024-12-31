// Defining an array of objects, each representing a user with a name and email.
const data = [
    { name: 'Nishant Sinha', email: 'sinhanishant046@gmail.com' },  // Object for Nishant Sinha
    { name: 'Rahul Sharma', email: 'rahul.sharma123@gmail.com' },  // Object for Rahul Sharma
    { name: 'Pooja Verma', email: 'pooja.verma456@yahoo.com' },    // Object for Pooja Verma
    { name: 'Ankit Mehta', email: 'ankit.mehta789@hotmail.com' }   // Object for Ankit Mehta
];

// Exporting the 'data' array so that it can be accessed in other files.
module.exports = data;  // This line allows other files to import the 'data' array using 'require'
