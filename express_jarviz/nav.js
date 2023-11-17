const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('welcome to the Home Page')
})
app.get('/about', (req, res) => {
    res.status(200).send('welcome to the ABout Page')
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})