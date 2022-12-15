// a simple server build with express

const express = require('express');


//creates an express app (server)
const app = express();

// the param '/' indicates the initial route on my express app
// in this case, when this route is requested, the server response
// sending to the client the read file

app.get('/', (req, res) =>{
    res.sendFile('./static/index.html', {
        root: __dirname
    });
});


app.listen(3000);
console.log(`server on port ${3000}`);
