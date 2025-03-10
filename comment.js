// Create web server
// 1. Import express module
const express = require('express');
// 2. Create an express app
const app = express();
// 3. Set the port for the server
const PORT = 3000;

// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
// 6. Check the server
// Run the server by typing node comment.js in the terminal
// Open your browser and go to http://localhost:3000
// You will see Hello World! on the browser
// To stop the server, press Ctrl+C in the terminal