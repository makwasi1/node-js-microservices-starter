const express = require('express');
const app = express();
const port = 3100;


app.get('/users', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`User service listening on port ${port}`)
})

