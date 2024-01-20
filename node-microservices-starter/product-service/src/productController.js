const express = require('express');
const app = express();
const port = 3200;


app.get('/products', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Products service listening on port ${port}`)
})

