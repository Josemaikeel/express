const express = require('express');

const app = express();

app.get('/products', (req, res)=>{

    res.sendFile('./static/products.html', {
        root: __dirname
    }); 

});

app.post('/products', (req, res) =>{

    res.send('Creando productos');
})


app.listen(3000);
console.log(`server on port ${3000}`);