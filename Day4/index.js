/*
Show File List:
    - This script creates multiple files in a specified folder.
    - It then retrieves the names of those files and prints them to the console.
*/

const fs = require('fs'); // Import the File System module to interact with the file system.
const path = require('path'); // Import the Path module to handle and transform file paths.

const dirPath = path.join(__dirname, 'files'); // Define the path to the folder named 'files' inside the current directory.

/**
 * Step 1: Create files in the folder
 * - A loop is used to create 5 text files named `hello0.txt`, `hello1.txt`, ..., `hello4.txt`.
 * - Each file contains the text "a simple text file".
 */
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file");
}

/**
 * Step 2: Retrieve and print file names
 * - The `fs.readdir` method reads the contents of the directory.
 * - The callback function receives the list of file names as the `files` argument.
 * - The `forEach` method iterates over the list of file names and prints each file name to the console.
 */
fs.readdir(dirPath, (err, files) => {
    if (err) {
        // Handle error if the directory cannot be read
        console.error("Error reading directory:", err);
        return;
    }
    
    // Iterate through the list of files and log their names
    files.forEach((item) => {
        console.log(item);
    });
});

/*
Expected Output:
After running this code, you should see the following file names printed to the console:
hello0.txt
hello1.txt
hello2.txt
hello3.txt
hello4.txt
*/
