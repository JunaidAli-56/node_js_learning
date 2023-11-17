const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('welcome to the express world')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})