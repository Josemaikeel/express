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

app.get('/about', (req, res) => {
    res.send('Me llamo Josemi, un placer')
});

app.use((req, res) => {
    res.status(404).send('Lo siento pero no hemos podido resolver su consulta :(')
})

app.listen(3000);
console.log(`server on port ${3000}`);
