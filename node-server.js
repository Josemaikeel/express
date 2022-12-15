// simple server in node
const http = require('http');

//module for read files
const fs = require('fs');


const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html');
    read.pipe(res);
});

server.listen(3000);
console.log(`Server on port ${3000}`);