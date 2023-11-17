const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.write('<h1>welcome to the Home Page</h1>')
    res.write('<h2>welcome to the Heading 2 Page</h2>')
    res.send();
})
app.get('/about', (req, res) => {
    res.status(200).send('welcome to the ABout Page')
})

// if you use json( ) instead of send() it will convert non-object into object...
app.get('/temp', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'jarviz'
        },
        {
            id: 2,
            name: 'firday'
        },
    ])
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})