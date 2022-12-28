const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/myfile', (req, res) => {
    res.sendFile('./static/javascript.png', {
        root: __dirname
    })
});

app.get('/user', (req, res) => {
    res.json({
        "name": "Josemi",
        "lastname": "Carrasco"
    });
});

app.listen(3000);
console.log(`Server on port ${3000}`);
console.log(__dirname);