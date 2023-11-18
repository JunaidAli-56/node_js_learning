const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Note use absolute path 'E:/myCode/Node' not use in backend relative path '../../../'
// __dirname is wrapper function

const staticPath = path.join(__dirname, '../public')
// builtin middleware static
// app.use(express.static(staticPath));

const dynamicFolderPath = path.join(__dirname, '../templates')

// set template engine
app.set('view engine', 'hbs');

// change the views folder name
app.set('views', dynamicFolderPath)


// define the tepmlate engine or dynamix Router..
app.get('/', (req, res) => {
    res.render('index', {
        userName: 'Jarviz',
    })
})

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get('/', (req, res) => {
//     res.send('welcome to the express world')
// })


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})