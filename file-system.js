// file-system.js
const fs = require('fs');

// Create a file "welcome.txt"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});

// Read data from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data read from file:', data);
});
