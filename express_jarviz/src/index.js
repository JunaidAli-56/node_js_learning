const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Note use absolute path 'E:/myCode/Node' not use in backend relative path '../../../'
// __dirname is wrapper function
const staticPath = path.join(__dirname, '../public')

// set template engine
app.set('view engine', 'hbs');

// builtin middleware static
// app.use(express.static(staticPath));

// define the tepmlate engine or dynamix Router..
app.get('/', (req, res) => {
    res.render('index', {
        userName: 'Jarviz',
    })
})

// app.get('/', (req, res) => {
//     res.send('welcome to the express world')
// })

app.get('/about', (req, res) => {
    res.send('welcome to the express about world')
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})