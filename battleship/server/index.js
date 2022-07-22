const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
 res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
 console.log('listening on *:3000');
});

require('dotenv').config()
console.log(process.env.MONGODB_CONNECTION_STRING) // remove this after you've confirmed it working