/*
CRUD with File System:
    - Create a file
    - Read file data
    - Update file data
    - Rename the file
    - Delete the file
*/

const fs = require('fs'); // Import the File System module to work with the file system.
const path = require('path'); // Import the Path module to handle and manipulate file paths.

const dirPath = path.join(__dirname); // Define the directory path as the current directory.
const filePath = `${dirPath}/CrudFile.txt`; // Define the file path for the CRUD file.

/**
 * Step 1: Create a file
 * - The `fs.writeFileSync` method creates a new file and writes data to it.
 * - If the file already exists, it overwrites the existing content.
 */
fs.writeFileSync(filePath, 'This is a simple text file');

/*
Step 2: Read the file data
- Use `fs.readFile` to read the content of the file asynchronously.

Example 1: Without specifying an encoding (raw buffer output):
fs.readFile(filePath, (err, item) => {
    console.log(item);
});
Output: <Buffer 54 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65>

Example 2: Specifying 'utf8' encoding to read the content as a string:
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
});
Output: This is a simple text file
*/

/**
 * Step 3: Update file data
 * - Use `fs.appendFile` to add data to the existing file content.
 * - If the file does not exist, it creates the file.
 * 
 * Example:
 * fs.appendFile(filePath, ' and file name is CrudFile.txt', (err) => {
 *     if (!err) {
 *         console.log("file is updated");
 *     }
 * });
 * Output: Adds ' and file name is CrudFile.txt' to the file.
 */

/**
 * Step 4: Rename the file
 * - Use `fs.rename` to rename the file.
 * - Specify the current file path and the new file path (including the new name).
 * 
 * Example:
 * fs.rename(filePath, `${dirPath}/CRUDFILE.txt`, (err) => {
 *     if (!err) {
 *         console.log("file name is updated");
 *     }
 * });
 * Output: The file name changes to 'CRUDFILE.txt'.
 */

/**
 * Step 5: Delete the file
 * - Use `fs.unlinkSync` to delete the file.
 * - Synchronous operation to remove the file at the specified path.
 */
fs.unlinkSync(`${dirPath}/CRUDFILE.txt`, (err) => {
    if (err) {
        console.log('Error in deletion');
    }
});

/*
Explanation of Operations:
1. Create: A file named 'CrudFile.txt' is created with the content "This is a simple text file".
2. Read: File content is read either as raw buffer data or a UTF-8 string.
3. Update: Additional data is appended to the file.
4. Rename: The file is renamed to 'CRUDFILE.txt'.
5. Delete: The renamed file is deleted.

Expected Outputs:
- File creation, updates, and renaming are confirmed via console logs.
- The file is removed successfully in the final step.

Error Handling:
- Error messages are logged if any operation fails.
*/
